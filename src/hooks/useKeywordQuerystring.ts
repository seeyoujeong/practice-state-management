import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useKeywordQuerystring = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keywordQuerystring = searchParams.get("keyword") || "";

  const setKeywordQuerystring = useCallback(
    (keyword: string) => {
      setSearchParams({ keyword });
    },
    [setSearchParams]
  );

  return useMemo(
    () => ({ keywordQuerystring, setKeywordQuerystring }),
    [keywordQuerystring, setKeywordQuerystring]
  );
};

export default useKeywordQuerystring;
