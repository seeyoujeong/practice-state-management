import { createContext, useMemo, useReducer } from "react";

export interface Searched {
  keyword: string;
  date: string;
}

interface SearchContextType {
  searchedList: Searched[];
  dispatch: React.Dispatch<Action>;
}

export const SearchContext = createContext<SearchContextType>({
  searchedList: [],
  dispatch: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchedList, dispatch] = useReducer(searchReducer, []);

  const searchContextValue = useMemo(
    () => ({
      searchedList,
      dispatch,
    }),
    [searchedList, dispatch]
  );

  return (
    <SearchContext.Provider value={searchContextValue}>
      {children}
    </SearchContext.Provider>
  );
}

type Action =
  | { type: "added"; keyword: string; date: string }
  | { type: "deleted"; keyword: string }
  | { type: "reset" };

function searchReducer(state: Searched[], action: Action) {
  switch (action.type) {
    case "added": {
      const { keyword, date } = action;

      if (state.find(({ keyword: prevKeyword }) => prevKeyword === keyword)) {
        const removedList = state.filter(
          ({ keyword: prevKeyword }) => prevKeyword !== keyword
        );

        return [{ keyword, date }, ...removedList];
      }

      return [{ keyword, date }, ...state];
    }
    case "deleted": {
      return state.filter(({ keyword }) => keyword !== action.keyword);
    }
    case "reset": {
      return [];
    }
    default: {
      throw Error(`Unknown action: ${action}`);
    }
  }
}
