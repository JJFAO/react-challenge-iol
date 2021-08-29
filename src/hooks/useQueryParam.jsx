import { useCallback, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

/**A custom hook that builds on useLocation to parse and set a parameter from the query string.
  @param {string} name Query param name to search.
  @returns The value of the searched query param and a function to update it.*/
export function useQueryParam(name) {
  const { replace } = useHistory();
  const { search } = useLocation();

  const queryParam = useMemo(() => {
    return (new URLSearchParams(search)).get(name) || undefined;
  }, [search, name]);

  const setQueryParam = useCallback((value) => {
    let searchParams = new URLSearchParams(search); // returns the existing query string: '?page=1&location=earth'

    if (value ?? true) searchParams.set(name, value);
    else searchParams.delete(name);

    // const method = value ?? true ? 'set' : 'delete';
    // searchParams[method](name, value);

    replace({ search: searchParams.toString() });
  }, [search, name, replace]);

  return [queryParam, setQueryParam];
}
