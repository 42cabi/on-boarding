import { useEffect, useState } from "react";
import styled from "styled-components";
import { searchGroup, searchName } from "../api/users";
import SearchResultStyled from "./SearchResult";

const SearchInputField = ({
  setSearchInputText,
}: {
  setSearchInputText: (searchTerm: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchList, setSearchList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      if (inputValue == "") {
        setSearchList([]);
        return;
      }
      try {
        if (inputValue[0] === "@") {
          const searchTerm = inputValue.slice(1).trim();
          const res = await searchGroup({ input: searchTerm });
          setSearchList(res.data.groupNames);
        } else {
          const res = await searchName({ input: inputValue });
          console.log(res.data.names);
          setSearchList(res.data.names);
        }
      } catch (error: any) {
        alert(error.response.data.message);
        setSearchList([]);
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
          <SearchResultStyled
          searchList={searchList}
          setSearchName={setSearchName}
          />
  
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

export default SearchInputField;
