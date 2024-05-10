import { useCallback, useMemo, useState } from "react";

const KEYWORD = "keyword";

const useSearch = () => {
  const url = useMemo(() => new URL(location.href), []);
  const keywordQuerystring = url.searchParams.get(KEYWORD) || "";
  const [searchKeyword, setSearchKeyword] = useState(keywordQuerystring);

  const setSearchAndQuerystring = useCallback(
    (text: string) => {
      const { searchParams } = url;

      searchParams.has(KEYWORD)
        ? searchParams.set(KEYWORD, text)
        : searchParams.append(KEYWORD, text);

      history.pushState({}, "", url);
      setSearchKeyword(text);
    },
    [url]
  );

  return useMemo(
    () => ({
      searchKeyword,
      setSearchKeyword,
      setSearchAndQuerystring,
    }),
    [searchKeyword, setSearchAndQuerystring]
  );
};

export default useSearch;
