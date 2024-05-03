import { createContext, useMemo, useState } from "react";

export interface Searched {
  keyword: string;
  date: string;
}

interface SearchContextType {
  searchedList: Searched[];
  setSearchedList: React.Dispatch<React.SetStateAction<Searched[]>>;
}

export const SearchContext = createContext<SearchContextType>({
  searchedList: [],
  setSearchedList: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
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
