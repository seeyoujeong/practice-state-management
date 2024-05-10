import { useState } from "react";
import styled from "@emotion/styled";
import { SearchBar, SearchResult, SearchedList } from "@/components";
import { useFocusState, useKeywordQuerystring } from "@/hooks";

export default function SearchPage() {
  const { elementRef, isFocus, focusOn, focusOff } =
    useFocusState<HTMLDivElement>();
  const { keywordQuerystring, setKeywordQuerystring } = useKeywordQuerystring();
  const [keyword, setKeyword] = useState(keywordQuerystring);

  return (
    <Container>
      <Wrapper ref={elementRef}>
        <SearchBar
          keyword={keyword}
          setKeyword={setKeyword}
          setKeywordQuerystring={setKeywordQuerystring}
          focusOn={focusOn}
          focusOff={focusOff}
        />
        <SearchedList
          setKeyword={setKeyword}
          setKeywordQuerystring={setKeywordQuerystring}
          isFocus={isFocus}
          focusOff={focusOff}
        />
      </Wrapper>
      <SearchResult keyword={keywordQuerystring} />
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
