import { useMemo } from 'react';
import { useQueryParam } from './useQueryParam';

export function usePaginate(allResults, filterCb) {
  const [page = 1, setPage] = useQueryParam('page');
  const [limit = 15, setLimit] = useQueryParam('limit');

  const resultsFiltered = useMemo(() => allResults.filter(filterCb), [allResults, filterCb]);

  const results = useMemo(() => {
    const start = 0 + page * limit - limit;
    const end = start + limit;

    const resultsSlice = resultsFiltered.slice(start, end);
    return resultsSlice;
  }, [resultsFiltered, page, limit]);

  const totalPages = useMemo(() => {
    return Math.ceil(resultsFiltered.length / limit);
  }, [resultsFiltered, limit]);

  const pageNumber = useMemo(() => parseInt(page), [page]);

  return { results, page: pageNumber, setPage, limit, setLimit, totalPages };
}
