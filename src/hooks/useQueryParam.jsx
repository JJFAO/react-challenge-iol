import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/**A custom hook that builds on useLocation to parse and set a parameter from the query string.
  @param {string} name Query param name to search.
  @returns The value of the searched query param and a function to update it.*/
export function useQueryParam(name) {
  const history = useHistory();
  const { search } = useLocation();

  const queryParam = useMemo(() => {
    return (new URLSearchParams(search)).get(name) || undefined;
  }, [search, name]);

  const setQueryParam = useCallback((value) => {
    let searchParams = new URLSearchParams(search); // returns the existing query string: '?page=1&location=earth'
    const shouldDelete = value === '' || value === undefined || value === null;

    if (shouldDelete) searchParams.delete(name);
    else searchParams.set(name, value);

    history.replace({ search: searchParams.toString() });
  }, [search, name, history]);

  return [queryParam, setQueryParam];
}
