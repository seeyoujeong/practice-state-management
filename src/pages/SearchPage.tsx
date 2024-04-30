import { SearchBar, SearchedList } from "@/components";
import styled from "@emotion/styled";

export default function SearchPage() {
  return (
    <Container>
      <SearchBar />
      <SearchedList />
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
