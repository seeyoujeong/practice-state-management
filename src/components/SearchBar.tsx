import { SearchContext } from "@/context";
import { getCurrentDate } from "@/utils";
import styled from "@emotion/styled";
import { FormEventHandler, useContext, useState } from "react";

export default function SearchBar() {
  const [keyword, setKeyword] = useState("");
  const { searchedList, setSearchedList } = useContext(SearchContext);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (keyword.trim().length === 0) return;

    const date = getCurrentDate();

    setSearchedList([...searchedList, { keyword, date }]);
    setKeyword("");
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          value={keyword}
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
`;
