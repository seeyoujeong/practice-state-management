import { useSearchParams } from "react-router-dom";

const useKeywordQuerystring = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordQuerystring = searchParams.get("keyword") || "";
  const setKeywordQuerystring = (keyword: string) => {
    setSearchParams({ keyword });
  };

  return { keywordQuerystring, setKeywordQuerystring };
};

export default useKeywordQuerystring;
