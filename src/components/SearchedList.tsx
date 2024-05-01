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
            <DateAndButtonArea>
              <DateBox>{`${getMonthAndDate(date).month}.${
                getMonthAndDate(date).date
              }`}</DateBox>
              <ButtonBox>x</ButtonBox>
            </DateAndButtonArea>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  width: 500px;
  box-sizing: border-box;
  padding: 10px 10px;
  border: 1px solid black;
  border-top: 0px;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const DateAndButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateBox = styled.span`
  margin-top: 5px;
`;

const ButtonBox = styled.button`
  border: 0px;
  cursor: pointer;
`;
