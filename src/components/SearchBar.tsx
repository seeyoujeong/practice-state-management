import { SearchContext } from "@/context";
import { getCurrentDate } from "@/utils";
import styled from "@emotion/styled";
import { FormEventHandler, useContext, useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const { searchedList, setSearchedList } = useContext(SearchContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const date = getCurrentDate();

    setSearchedList([...searchedList, { keyword, date }]);
    setKeyword("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
        />
        <button>검색</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
`;
