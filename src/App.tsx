import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";
import { Provider } from "react-redux";
import { store } from "./context/store";

function App() {
  return (
    <Container>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
