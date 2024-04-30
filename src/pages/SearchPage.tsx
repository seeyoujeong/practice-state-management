import { SearchBar } from "@/components";
import { SearchContext } from "@/context";
import { getMonthAndDate } from "@/utils";
import styled from "@emotion/styled";
import { useContext } from "react";

export default function SearchPage() {
  const { searchedList } = useContext(SearchContext);

  return (
    <Container>
      <SearchBar />
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
