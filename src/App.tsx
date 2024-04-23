import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";

function App() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
