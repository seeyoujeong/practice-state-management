import { useContext } from "react";
import styled from "@emotion/styled";
import { SearchContext } from "@/context";
import { getCurrentDate } from "@/utils";
import SearchedItem from "./SearchedItem";

interface SearchedListProps {
  isFocus: boolean;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setKeywordQuerystring: (keyword: string) => void;
  focusOff: () => void;
}

export default function SearchedList({
  isFocus,
  setKeyword,
  setKeywordQuerystring,
  focusOff,
}: SearchedListProps) {
  const { searchedList, dispatch } = useContext(SearchContext);

  const handleResetClick = (event: React.MouseEvent) => {
    event.stopPropagation();

    if (confirm("최근검색어를 모두 삭제하시겠습니까?")) {
      dispatch({ type: "reset" });
    }
  };

  const handleDeleteClick = (
    event: React.MouseEvent,
    clickedKeyword: string
  ) => {
    event.stopPropagation();

    dispatch({ type: "deleted", keyword: clickedKeyword });
  };

  const handleSelectClick = (clickedKeyword: string) => {
    dispatch({
      type: "added",
      keyword: clickedKeyword,
      date: getCurrentDate(),
    });
    setKeywordQuerystring(clickedKeyword);
    setKeyword(clickedKeyword);

    focusOff();
  };

  return (
    <Container isDisplay={isFocus}>
      {searchedList.length > 0 ? (
        <>
          <ListHeader>
            <span>최근 검색어</span>
            <ResetButton onClick={(event) => handleResetClick(event)}>
              전체 삭제
            </ResetButton>
          </ListHeader>
          <List>
            {searchedList.map(({ keyword, date }) => (
              <SearchedItem
                key={date}
                keyword={keyword}
                date={date}
                onDeleteClick={handleDeleteClick}
                onSelectClick={handleSelectClick}
              />
            ))}
          </List>
        </>
      ) : (
        <NoSearched>최근 검색어 내역이 없습니다.</NoSearched>
      )}
    </Container>
  );
}

const Container = styled.div<{ isDisplay: boolean }>`
  width: 500px;
  display: ${({ isDisplay }) => (isDisplay ? "block" : "none")};
  position: absolute;
  padding: 10px 0;
  box-sizing: border-box;
  border: 1px solid black;
  border-top: 0px;
  background-color: white;
`;

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 14px;
`;

const ResetButton = styled.button`
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

const NoSearched = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
