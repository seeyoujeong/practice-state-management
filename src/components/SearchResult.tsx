import { useKeywordQuerystring } from "@/hooks";

export default function SearchResult() {
  const { keywordQuerystring } = useKeywordQuerystring();

  return <>{keywordQuerystring}</>;
}
