import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setIsLoading(false);
    })();
  }, [url]);

  return [data, isLoading];
}

export function useFetchAll(url) {
  const [data, isLoading] = useFetch(url);
  const [allData, setAllData] = useState([]);
  const [isAnyLoading, setIsAnyLoading] = useState(true);

  useEffect(() => {
    if (isLoading) return;

    (async function () {
      setIsAnyLoading(true);
      const pages = data.info.pages;
      const promises = [...new Array(pages)].map((_, i) => axios.get(url, { params: { page: i + 1 } }));
      const allResponses = await Promise.all(promises);
      const allResults = allResponses.reduce((acc, curr) => ([...acc, ...curr.data.results]), [])
      setAllData(allResults);
      setIsAnyLoading(false);
    })();
  }, [url, data, isLoading]);

  return [allData, isAnyLoading];
}
