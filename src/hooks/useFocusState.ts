import { useEffect, useRef, useState } from "react";

const useFocusState = <T extends HTMLElement>() => {
  const [isFocus, setIsFocus] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const element = elementRef.current;

      if (element && !element.contains(event.target as Node)) {
        setIsFocus(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return { elementRef, isFocus, setIsFocus };
};

export default useFocusState;
