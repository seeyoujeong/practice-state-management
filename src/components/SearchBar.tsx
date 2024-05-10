import { FormEventHandler, useContext } from "react";
import styled from "@emotion/styled";
import { SearchContext } from "@/context";
import { getCurrentDate } from "@/utils";

interface SearchBarProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  setKeywordQuerystring: (keyword: string) => void;
  focusOn: () => void;
  focusOff: () => void;
}

export default function SearchBar({
  keyword,
  setKeyword,
  setKeywordQuerystring,
  focusOn,
  focusOff,
}: SearchBarProps) {
  const { dispatch } = useContext(SearchContext);

  const handleSubmit: FormEventHandler = (event) => {
    event.preventDefault();
    const currentKeyword = keyword.trim();

    if (currentKeyword.length === 0) return;

    dispatch({
      type: "added",
      keyword: currentKeyword,
      date: getCurrentDate(),
    });
    setKeywordQuerystring(currentKeyword);
    setKeyword(currentKeyword);

    focusOff();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(event) => setKeyword(event.target.value)}
          value={keyword}
          onFocus={() => focusOn()}
        />
        <Button>검색</Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  padding-top: 10px;
`;

const Form = styled.form`
  width: 500px;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid black;
`;

const Input = styled.input`
  height: 24px;
  padding: 0 10px;
  flex-grow: 1;
  border: 0px;
  outline-style: none;
  font-size: 20px;
`;

const Button = styled.button`
  width: 50px;
  height: 100%;
  border: 0px;
  cursor: pointer;
`;
