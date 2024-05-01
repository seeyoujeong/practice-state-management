import { SearchBar, SearchedList } from "@/components";
import { useFocusState } from "@/hooks";
import styled from "@emotion/styled";

export default function SearchPage() {
  const { elementRef, isFocus, setIsFocus } = useFocusState<HTMLDivElement>();

  return (
    <Container>
      <div ref={elementRef}>
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
