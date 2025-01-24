import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { searchGroup, searchName } from "../api/users";
import { al } from "react-router/dist/development/fog-of-war-DLtn2OLr";


const SearchInputField = ({
  setSearchInputText,
}: {
  setSearchInputText: (searchTerm: string) => void;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchResult, setSearchResult] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(async () => {
      // API call

      if (inputValue == "") return;
      if (inputValue[0] === "@") {
        try {
          const res = await searchGroup({ input: inputValue });
          console.log("res : ", res.data);
          setSearchResult(res.data);
        } catch (error: any) {
          alert(error.response.data.message);
        }
      }

      if (inputValue.length) {
        try {
          const res = await searchName({ input: inputValue });
          setSearchResult(res.data);
        } catch (error: any) {
          // alert(error.response.data.message);
        }
      }

    }, 1000); // 1초

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputValue]);

  const handleSearch = (e: { target: { value: string } }) => {
    if (e.target.value === "") {
      setSearchResult([]);
      setInputValue("");
      setSearchInputText("");
    }
    setInputValue(e.target.value);
    setSearchInputText(e.target.value);
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
          onBlur={() => setIsFocused(false)}
          $isFocus={isFocused}
        />
        {isFocused && (
          <SearchResultStyled>
            {searchResult.length > 0 && (
              <SearchUlStyled>
                {searchResult.map((result) => (
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
  background-color: #ffffff;
  border-radius: 8px;
  text-align: left;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid ${({ $isFocus }) => ($isFocus ? "#9747ff" : "#ffffff")};
  text-align: left;
`;

const SearchResultStyled = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1000;
  border-radius: 8px;
  background-color: #ffffff;
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
    background-color: #9747ff;
    color: #ffffff;
  }
`;

export default SearchInputField;
