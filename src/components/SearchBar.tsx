import styled from "@emotion/styled";
import { useSearchStore } from "@/stores";
import { getCurrentDate } from "@/utils";

interface SearchBarProps {
  searchKeyword: string;
  setSearchKeyword: (keyword: string) => void;
  setSearchAndQuerystring: (keyword: string) => void;
  focusOn: () => void;
  focusOff: () => void;
}

export default function SearchBar({
  searchKeyword,
  setSearchKeyword,
  setSearchAndQuerystring,
  focusOn,
  focusOff,
}: SearchBarProps) {
  const addKeyword = useSearchStore((state) => state.addKeyword);

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    const currentKeyword = searchKeyword.trim();

    if (currentKeyword.length === 0) return;

    addKeyword(currentKeyword, getCurrentDate());
    setSearchAndQuerystring(currentKeyword);
    focusOff();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          onChange={(event) => setSearchKeyword(event.target.value)}
          value={searchKeyword}
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
