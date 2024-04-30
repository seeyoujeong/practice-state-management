import { useContext } from "react";
import { SearchContext } from "@/context";
import { getMonthAndDate } from "@/utils";
import styled from "@emotion/styled";

export default function SearchedList() {
  const { searchedList } = useContext(SearchContext);

  return (
    <Container>
      <List>
        {searchedList.map(({ keyword, date }) => (
          <Item key={date}>
            <span>{keyword}</span>
            <span>{`${getMonthAndDate(date).month}.${
              getMonthAndDate(date).date
            }`}</span>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;
