import { useCallback, useState } from "react";
import { API_URL } from "../settings.config";

export const useHttpRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const requestTask = useCallback(
    async ({ method, headers, body }, applyDataCallback) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_URL}/tasks.json`, {
          method: method ? method : "GET",
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        applyDataCallback(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return { isLoading, error, requestTask };
};
