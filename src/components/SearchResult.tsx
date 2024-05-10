interface SearchResultProps {
  searchKeyword: string;
}

export default function SearchResult({ searchKeyword }: SearchResultProps) {
  return <>{searchKeyword}</>;
}
