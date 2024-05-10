import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const useFocusState = <T extends HTMLElement>() => {
  const [isFocus, setIsFocus] = useState(false);
  const elementRef = useRef<T>(null);

  const focusOn = useCallback(() => {
    setIsFocus(true);
  }, []);

  const focusOff = useCallback(() => {
    (document.activeElement as HTMLElement).blur();
    setIsFocus(false);
  }, []);

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

  return useMemo(
    () => ({ elementRef, isFocus, focusOn, focusOff }),
    [isFocus, focusOn, focusOff]
  );
};

export default useFocusState;
