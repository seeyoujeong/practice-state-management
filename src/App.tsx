import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { LevelContext } from "./context";

function App() {
  const [level, setLevel] = useState(1);

  const contextValue = useMemo(
    () => ({
      level,
      setLevel,
    }),
    [level, setLevel]
  );

  return (
    <Container>
      <LevelContext.Provider value={contextValue}>
        <Header />
        <Outlet />
      </LevelContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
