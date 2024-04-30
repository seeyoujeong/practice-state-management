import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { SearchContext, Searched } from "@/context";

function App() {
  const [searchedList, setSearchedList] = useState<Searched[]>([]);

  const searchContextValue = useMemo(
    () => ({
      searchedList,
      setSearchedList,
    }),
    [searchedList, setSearchedList]
  );

  return (
    <Container>
      <SearchContext.Provider value={searchContextValue}>
        <Header />
        <Outlet />
      </SearchContext.Provider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
`;
