import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "@/components";

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
