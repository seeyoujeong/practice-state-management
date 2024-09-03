import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { Header } from "@/components";
import { CartProvider, SearchProvider } from "@/context";

function App() {
  return (
    <Container>
      <SearchProvider>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </SearchProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
