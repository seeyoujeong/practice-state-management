import { SearchBar, SearchedList } from "@/components";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

export default function SearchPage() {
  const [isFocus, setIsFocus] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsFocus(false);
      }
    };

    document.addEventListener("click", handlOutsideClick);

    return () => {
      document.removeEventListener("click", handlOutsideClick);
    };
  }, []);

  return (
    <Container>
      <div ref={ref}>
        <SearchBar setIsFocus={setIsFocus} />
        <SearchedList isFocus={isFocus} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
