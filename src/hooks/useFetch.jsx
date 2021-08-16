import axios from 'axios';
import { useEffect, useState } from 'react';

export function useFetch(url, initialState = {}) {
  const [data, setData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      const res = await axios.get(url);
      const locationsNames = res.data;
      setData(locationsNames);
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
      const pageNumbers = new Array(data.info.pages);
      const promises = pageNumbers.map((page) => axios.get(url, { params: { page } }));
      const allResponses = await Promise.all(promises);
      setAllData(allResponses);
      setIsAnyLoading(false);
    })();
  }, [url, data, isLoading]);

  return [allData, isAnyLoading];
}
