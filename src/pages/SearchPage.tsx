import { SearchContext } from "@/context";
import styled from "@emotion/styled";
import { FormEventHandler, useContext, useState } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const { searchedList, setSearchedList } = useContext(SearchContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const offset = new Date().getTimezoneOffset() * 60 * 1000;
    const currentDate = new Date(Date.now() - offset).toISOString();
    setSearchedList([...searchedList, { keyword, date: currentDate }]);
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
      <ul>
        {searchedList.map(({ keyword, date }) => (
          <li key={date}>{keyword}</li>
        ))}
      </ul>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
