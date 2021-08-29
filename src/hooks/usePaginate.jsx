import { useEffect, useMemo, useState } from 'react';
import { useQueryParam } from './useQueryParam';

export function usePaginate(allResults, filterCb) {
  const [results, setResults] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page = 1, setPage] = useQueryParam('page');
  const [limit, setLimit] = useState(15);

  const resultsFiltered = useMemo(() => allResults.filter(filterCb), [allResults, filterCb]);

  useEffect(() => {
    const start = 0 + page * limit - limit;
    const end = start + limit;

    const resultsSlice = resultsFiltered.slice(start, end);
    setResults(resultsSlice);
  }, [resultsFiltered, page, limit]);

  useEffect(() => {
    const totalPages = Math.ceil(resultsFiltered.length / limit);
    setTotalPages(totalPages);
  }, [resultsFiltered, limit]);

  const pageNumber = useMemo(() => parseInt(page), [page]);

  return { results, page: pageNumber, setPage, limit, setLimit, totalPages };
}
