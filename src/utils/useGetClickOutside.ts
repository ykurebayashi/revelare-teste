import { useEffect } from "react";

export const useOutsideClick = (ref: React.RefObject<HTMLElement>, handler: (param?: boolean) => void) => {
    useEffect(() => {
      const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, [ref, handler]);
  }