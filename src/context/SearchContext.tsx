import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";

export interface Searched {
  keyword: string;
  date: string;
}

interface SearchContextType {
  searchedList: Searched[];
  setSearchedList: Dispatch<SetStateAction<Searched[]>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchedList: [],
  setSearchedList: () => {},
});

export function SearchProvider({ children }: { children: ReactNode }) {
  const [searchedList, setSearchedList] = useState<Searched[]>([]);

  const searchContextValue = useMemo(
    () => ({
      searchedList,
      setSearchedList,
    }),
    [searchedList, setSearchedList]
  );

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}
