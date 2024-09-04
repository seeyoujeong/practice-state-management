import { create } from "zustand";
import { Searched } from "@/types";

type State = {
  searchedList: Searched[];
};

type Actions = {
  addKeyword: (keyword: string, date: string) => void;
  deleteKeyword: (keyword: string) => void;
  resetList: () => void;
};

const useSearchStore = create<State & Actions>((set) => ({
  searchedList: [],
  addKeyword: (keyword: string, date: string) =>
    set((state) => {
      if (
        state.searchedList.find(
          ({ keyword: prevKeyword }) => prevKeyword === keyword
        )
      ) {
        const removedList = state.searchedList.filter(
          ({ keyword: prevKeyword }) => prevKeyword !== keyword
        );

        return { ...state, searchedList: [{ keyword, date }, ...removedList] };
      }

      return {
        ...state,
        searchedList: [{ keyword, date }, ...state.searchedList],
      };
    }),
  deleteKeyword: (keyword: string) =>
    set((state) => ({
      searchedList: state.searchedList.filter(
        (prevState) => prevState.keyword !== keyword
      ),
    })),
  resetList: () => set({ searchedList: [] }),
}));

export default useSearchStore;
