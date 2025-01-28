import { useEffect, useState } from "react";
import styled from "styled-components";
import { searchGroup, searchName } from "../api/users";

const SearchInputField = ({
  setSearchInputText,
}: {
  setSearchInputText: (searchTerm: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchResult, setSearchResult] = useState<{ names: string[] }>({
    names: [],
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (inputValue == "") {
        setSearchResult({ names: [] });
        return;
      }
      try {
        if (inputValue[0] === "@") {
          const res = await searchGroup({ input: "everyone" });
          setSearchResult(res.data);
        } else {
          const res = await searchName({ input: inputValue });
          setSearchResult(res.data);
        }
      } catch (error: any) {
        alert(error.response.data.message);
        setSearchResult({ names: [] });
      }
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue]);

  const handleSearch = async (e: { target: { value: string } }) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchInputText(value);
  };

  const setSearchName = (value: string) => {
    setInputValue(value);
    setSearchInputText(value);
    setIsFocused(false);
  };

  return (
    <>
      <SearchWrapperStyled>
        <SearchInputFieldStyled
          type="text"
          value={inputValue}
          placeholder="intra id / @everyone"
          onChange={handleSearch}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          $isFocus={isFocused}
        />
        {isFocused && (
          <SearchResultStyled>
            {searchResult.names?.length > 0 && (
              <SearchUlStyled>
                {searchResult.names.map((result) => (
                  <SearchLiStyled
                    key={result}
                    onMouseDown={() => setSearchName(result)}
                  >
                    {result}
                  </SearchLiStyled>
                ))}
              </SearchUlStyled>
            )}
          </SearchResultStyled>
        )}
      </SearchWrapperStyled>
    </>
  );
};

const SearchWrapperStyled = styled.div`
  width: 100%;
  position: relative;
`;

const SearchInputFieldStyled = styled.input<{ $isFocus: boolean }>`
  width: 100%;
  height: 40px;
  background-color: var(--ref-white);
  border-radius: 8px;
  text-align: left;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid
    ${({ $isFocus }) =>
      $isFocus ? "var(--ref-purple-500)" : "var(--ref-white)"};
  text-align: left;
`;

const SearchResultStyled = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  background-color: var(--ref-white);
`;

const SearchUlStyled = styled.ul`
  min-height: 30px;
  padding-left: 0px;
`;

const SearchLiStyled = styled.li`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  padding-bottom: 3px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: var(--ref-purple-500);
    color: var(--ref-white);
  }
`;

export default SearchInputField;
