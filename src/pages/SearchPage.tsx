import { SearchContext } from "@/context";
import styled from "@emotion/styled";
import { FormEventHandler, useContext, useState } from "react";

const getMonthAndDate = (ISOTime: string) => {
  const [yearMonthDate] = ISOTime.split("T");
  const [, month, date] = yearMonthDate.split("-");

  return {
    month,
    date,
  };
};

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
      <SearchedListWrapper>
        <SearchedList>
          {searchedList.map(({ keyword, date }) => (
            <Searched key={date}>
              <span>{keyword}</span>
              <span>{`${getMonthAndDate(date).month}.${
                getMonthAndDate(date).date
              }`}</span>
            </Searched>
          ))}
        </SearchedList>
      </SearchedListWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchedListWrapper = styled.div`
  padding-top: 10px;
`;

const SearchedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Searched = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
