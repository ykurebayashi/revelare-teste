import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number): string => {
  const [valueUsed, setValueUsed] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValueUsed(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return valueUsed;
};
