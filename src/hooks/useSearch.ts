import { useCallback, useMemo, useState, useTransition } from "react";

const KEYWORD = "keyword";

const useSearch = () => {
  const url = useMemo(() => new URL(location.href), []);
  const keywordQuerystring = url.searchParams.get(KEYWORD) || "";
  const [searchKeyword, setSearchKeyword] = useState(keywordQuerystring);
  const [isPending, startTransition] = useTransition();

  const updateSearchKeyword = useCallback((text: string) => {
    startTransition(() => {
      setSearchKeyword(text);
    });
  }, []);

  const updateSearchAndQuerystring = useCallback(
    (text: string) => {
      const { searchParams } = url;

      searchParams.has(KEYWORD)
        ? searchParams.set(KEYWORD, text)
        : searchParams.append(KEYWORD, text);

      history.pushState({}, "", url);
      updateSearchKeyword(text);
    },
    [url, updateSearchKeyword]
  );

  return useMemo(
    () => ({
      searchKeyword,
      setSearchKeyword: updateSearchKeyword,
      setSearchAndQuerystring: updateSearchAndQuerystring,
      isPending,
    }),
    [isPending, searchKeyword, updateSearchAndQuerystring, updateSearchKeyword]
  );
};

export default useSearch;
