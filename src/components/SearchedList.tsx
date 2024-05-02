import { MouseEvent, useContext } from "react";
import { SearchContext } from "@/context";
import { getMonthAndDate } from "@/utils";
import styled from "@emotion/styled";

interface SearchedList {
  isFocus: boolean;
}

export default function SearchedList({ isFocus }: SearchedList) {
  const { searchedList, setSearchedList } = useContext(SearchContext);

  const handleDeleteAllClick = (event: MouseEvent) => {
    event.stopPropagation();

    if (confirm("최근검색어를 모두 삭제하시겠습니까?")) {
      setSearchedList([]);
    }
  };

  const handleDeleteClick = (event: MouseEvent, clickedKeyword: string) => {
    event.stopPropagation();

    const removedList = searchedList.filter(
      ({ keyword }) => keyword !== clickedKeyword
    );

    setSearchedList(removedList);
  };

  return (
    <Container isDisplay={isFocus && searchedList.length > 0}>
      <ListHeader>
        <span>최근 검색어</span>
        <DeleteAllButton onClick={(event) => handleDeleteAllClick(event)}>
          전체 삭제
        </DeleteAllButton>
      </ListHeader>
      <List>
        {searchedList.map(({ keyword, date }) => (
          <Item key={date}>
            <KeywordBox>{keyword}</KeywordBox>
            <DateAndButtonArea>
              <DateBox>{`${getMonthAndDate(date).month}.${
                getMonthAndDate(date).date
              }`}</DateBox>
              <DeleteButton
                onClick={(event) => handleDeleteClick(event, keyword)}
              >
                x
              </DeleteButton>
            </DateAndButtonArea>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div<{ isDisplay: boolean }>`
  width: 500px;
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid black;
  border-top: 0px;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
`;

const DeleteAllButton = styled.button`
  height: 20px;
  border: 0px;
  cursor: pointer;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const KeywordBox = styled.span`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const DateAndButtonArea = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DateBox = styled.span`
  margin-top: 5px;
`;

const DeleteButton = styled.button`
  border: 0px;
  cursor: pointer;
`;
