import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay: number): T => {
    const [valueUsed, setValueUsed] = useState(value);
  
    useEffect(() => {
      const handler = setTimeout(() => {
        setValueUsed(value);
      }, delay);

      return () => clearTimeout(handler);
    }, [value, delay]);
  
    return valueUsed;
};