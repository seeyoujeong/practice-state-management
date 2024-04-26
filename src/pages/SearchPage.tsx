import styled from "@emotion/styled";
import { FormEventHandler, useState } from "react";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button>검색</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  justify-content: center;
`;
