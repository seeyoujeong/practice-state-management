import { useContext } from "react";
import { SearchContext } from "@/context";

export default function SearchResult() {
  const { searchedList } = useContext(SearchContext);

  return <>{searchedList[0]?.keyword || ""}</>;
}
