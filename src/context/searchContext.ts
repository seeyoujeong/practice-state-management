import { Dispatch, SetStateAction, createContext } from "react";

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
