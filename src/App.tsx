import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { LevelContext, SearchContext, Searched } from "@/context";

function App() {
  const [level, setLevel] = useState(1);
  const [searchedList, setSearchedList] = useState<Searched[]>([]);

  const contextValue = useMemo(
    () => ({
      level,
      setLevel,
    }),
    [level, setLevel]
  );

  const searchContextValue = useMemo(
    () => ({
      searchedList,
      setSearchedList,
    }),
    [searchedList, setSearchedList]
  );

  return (
    <Container>
      <LevelContext.Provider value={contextValue}>
        <SearchContext.Provider value={searchContextValue}>
          <Header />
          <Outlet />
        </SearchContext.Provider>
      </LevelContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
