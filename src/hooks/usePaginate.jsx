import { useMemo } from 'react';
import { useQueryParam } from './useQueryParam';

//eslint-disable-next-line
const initialValues = { limit: 0}

/** Receives an array and returns the paginated result.
 * @param {array} allResults An array to paginate.
 * @param {function} [filterCb] A callback function with a filter to apply.
 * @param {initialValues} [initialValues] An object with initial values.
 * @returns An object containing the resulting values and its setter functions.
 */
export function usePaginate(allResults, filterCb, initialValues) {
  const [page = 1, setPage] = useQueryParam('page');
  const [limit = initialValues.limit || 8, setLimit] = useQueryParam('limit');

  const resultsFiltered = useMemo(() => allResults.filter(filterCb), [allResults, filterCb]);

  const results = useMemo(() => {
    const start = 0 + page * limit - limit;
    const end = start + parseInt(limit);

    const resultsSlice = resultsFiltered.slice(start, end);
    return resultsSlice;
  }, [resultsFiltered, page, limit]);

  const totalPages = useMemo(() => {
    return Math.ceil(resultsFiltered.length / limit);
  }, [resultsFiltered, limit]);

  const pageNumber = useMemo(() => parseInt(page), [page]);
  const limitNumber = useMemo(() => parseInt(limit), [limit]);

  return { results, page: pageNumber, setPage, limit: limitNumber, setLimit, totalPages };
}
