import { useState } from "react";

export function useFetching() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (url, method = "GET", body = null) => {
    setLoading(true);
    setError(null);
    try {
      const options = {
        method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      setError(err.message);
      console.error(err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, error };
}
