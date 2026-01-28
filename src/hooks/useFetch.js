import { useState, useEffect } from 'react';

/**
 * Custom hook for fetching data from an API
 * @param {string} url - The URL to fetch from
 * @returns {Object} - { data, loading, error }
 */
export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if no URL
    if (!url) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

    async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP-Fehler: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]); // Re-fetch when URL changes

  return { data, loading, error };
}