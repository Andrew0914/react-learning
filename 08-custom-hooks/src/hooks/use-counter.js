import { useEffect, useState } from "react";

export const useCounter = (delta = 1) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + delta);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter
}