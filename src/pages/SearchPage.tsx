import styled from "@emotion/styled";
import { SearchBar, SearchResult, SearchedList } from "@/components";
import { useFocusState, useSearch } from "@/hooks";

export default function SearchPage() {
  const { elementRef, isFocus, focusOn, focusOff } =
    useFocusState<HTMLDivElement>();
  const { searchKeyword, setSearchKeyword, setSearchAndQuerystring } =
    useSearch();

  return (
    <Container>
      <Wrapper ref={elementRef}>
        <SearchBar
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          setSearchAndQuerystring={setSearchAndQuerystring}
          focusOn={focusOn}
          focusOff={focusOff}
        />
        <SearchedList
          setSearchAndQuerystring={setSearchAndQuerystring}
          isFocus={isFocus}
          focusOff={focusOff}
        />
      </Wrapper>
      <SearchResult searchKeyword={searchKeyword} />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Wrapper = styled.div`
  position: relative;
`;
