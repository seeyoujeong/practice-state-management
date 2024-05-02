import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";
import { SearchProvider } from "@/context";

function App() {
  return (
    <Container>
      <SearchProvider>
        <Header />
        <Outlet />
      </SearchProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
