import styled from "@emotion/styled";
import { SearchBar, SearchResult, SearchedList } from "@/components";
import { useFocusState } from "@/hooks";

export default function SearchPage() {
  const { elementRef, isFocus, setIsFocus } = useFocusState<HTMLDivElement>();

  return (
    <Container>
      <Wrapper ref={elementRef}>
        <SearchBar setIsFocus={setIsFocus} />
        <SearchedList isFocus={isFocus} setIsFocus={setIsFocus} />
      </Wrapper>
      <SearchResult />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
`;
