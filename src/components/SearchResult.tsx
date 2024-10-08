import styled from "@emotion/styled";

import { useCartStore } from "@/stores";

interface SearchResultProps {
  searchKeyword: string;
}

export default function SearchResult({ searchKeyword }: SearchResultProps) {
  const addCartItem = useCartStore((state) => state.addCartItem);

  const handleAddToCart = (name: string) => {
    addCartItem(name);
  };

  return (
    <ResultList>
      {searchKeyword &&
        Array.from({ length: 5 }, (_, idx) => idx + 1).map((val, key) => (
          <ResultItem
            key={key}
            onClick={() => handleAddToCart(searchKeyword + val)}
          >
            {searchKeyword + val}
          </ResultItem>
        ))}
    </ResultList>
  );
}

const ResultList = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ResultItem = styled.div`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
