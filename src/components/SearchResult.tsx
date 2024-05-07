import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [searchParams] = useSearchParams();

  return <>{searchParams.get("query") || ""}</>;
}
