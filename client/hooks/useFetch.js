import { useState, useEffect } from 'react';

export default function useFetch(url, { skip } = { skip: false }) {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    if (skip) {
      return;
    }
    
    setData(undefined);
    
    const abortController = new AbortController();
    
    fetch(url, { signal: abortController.signal })
      .then(res => res.json())
      .then(setData);
    
    return () => {
      abortController.abort();
    };
  }, [url, skip]);

  return { data, loading: data === undefined };
}
