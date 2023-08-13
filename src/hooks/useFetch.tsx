import { useState, useEffect } from "react";

/**
 * @param url endpoint to fetch data from
 * @returns { data, error, loading }
 */
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let didCancelFetch = false;

    setError(null);
    setLoading(true);

    const fetchData = async () => {
      try {
        if (!didCancelFetch) {
          const res = await fetch(url);
          const responseJson = await res.json();
          setData(responseJson);
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setLoading(false);
    };

    fetchData();

    return () => {
      didCancelFetch = true;
    };
  }, [url]);

  return { data, error, loading };
}
