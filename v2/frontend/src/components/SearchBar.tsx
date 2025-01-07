import { RefObject, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import React from "react";

const ChangeToHTML = ({
  origin,
  toReplace,
}: {
  origin: string;
  toReplace?: string;
}) => {
  if (!toReplace) return <span>{origin}</span>;
  const html: string = origin.replace(
    toReplace,
    `<strong>${toReplace}</strong>`
  );
  return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
};

type CallbackFunction = () => void;

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const SearchBar = ({
  searchInputRef,
  totalLength,
  setTotalLength,
  searchList,
  setSearchList,
}: {
  searchInputRef: React.RefObject<HTMLInputElement>;
  totalLength: number;
  setTotalLength: React.Dispatch<React.SetStateAction<number>>;
  searchList: string[];
  setSearchList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [onFocus, setOnFocus] = useState<boolean>(true);
  const [targetIndex, setTargetIndex] = useState<number>(-1);
  const [searchValue, setSearchValue] = useState<string>("");
  const debounceRefs = useRef<{ [key: string]: NodeJS.Timeout | null }>({});

  const debounce = (key: string, callback: () => void) => {
    if (debounceRefs.current[key]) {
      clearTimeout(debounceRefs.current[key]!);
    }
    debounceRefs.current[key] = setTimeout(() => {
      callback();
    }, 300);
  };

  const typeSearchInput = async () => {
    if (searchInputRef.current) {
      const searchValue = searchInputRef.current.value;
      setSearchValue(searchValue);
      if (searchValue.length <= 0) {
        setSearchList([]);
        setTotalLength(0);
        setTargetIndex(-1);
        return;
      }
      if (searchValue.length <= 1) {
        setSearchList([]);
        setTotalLength(0);
        setTargetIndex(-1);
      } else {
        try {
          await axios
            .get(
              "http://localhost:8080/users?name=" +
                searchInputRef.current.value,
              {
                withCredentials: true,
                headers: {
                  // "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
              }
            )
            .then((response) => {
              setSearchList(response.data.names);
              setTotalLength(response.data.names.length);
            });
        } catch (error: any) {
          if (error.status) setTotalLength(0);
          // TODO :
        } finally {
        }
      }
    }
  };

  const valueChangeHandler = () => {
    return searchList[targetIndex];
  };

  // searchInputRef value change
  useEffect(() => {
    if (targetIndex !== -1) {
      searchInputRef.current!.value = valueChangeHandler();
      setSearchValue(searchInputRef.current!.value);
    }
  }, [targetIndex]);

  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchInputRef.current) {
      if (targetIndex !== -1) {
        searchInputRef.current!.value = valueChangeHandler();
        setSearchValue(searchInputRef.current!.value);
        setTotalLength(0);
      }
    } else if (e.key == "ArrowUp") {
      if (totalLength > 0) {
        setTargetIndex((prev) => (prev > 0 ? prev - 1 : searchList.length - 1));
      }
    } else if (e.key == "ArrowDown") {
      if (totalLength > 0) {
        setTargetIndex((prev) => (prev < searchList.length - 1 ? prev + 1 : 0));
      }
    }
  };

  useOutsideClick(searchInputRef, () => {
    setOnFocus(false);
  });

  const renderReceiverInput = (title: string) => {
    if (searchInputRef.current) searchInputRef.current.value = title;
  };

  return (
    <>
      <SearchBarWrapStyled>
        <FormInputStyled
          placeholder="모두에게 보낼 땐 everyone"
          ref={searchInputRef}
          type="text"
          onFocus={() => {
            setOnFocus(true);
          }}
          onChange={() => debounce("SlackAlarmSearch", typeSearchInput)}
          onKeyDown={handleInputKey}
        />
        {onFocus && searchInputRef.current?.value && totalLength > 0 && (
          <>
            <UlStyled>
              {searchList.map((item, index: number) => {
                return (
                  <LiStyled
                    className={targetIndex === index ? "active" : ""}
                    onClick={() => {
                      renderReceiverInput(item);
                    }}
                    key={item}
                  >
                    <ChangeToHTML origin={item} toReplace={searchValue} />
                  </LiStyled>
                );
              })}
            </UlStyled>
          </>
        )}
      </SearchBarWrapStyled>
    </>
  );
};

const SearchBarWrapStyled = styled.div`
  position: relative;
`;

const FormInputStyled = styled.input`
  width: 100%;
  height: 40px;
  background-color: var(--ref-white);
  border-radius: 8px;
  border: 1px solid var(--ref-gray-200);
  :focus {
    border: 1px solid var(--sys-main-color);
  }
  text-align: left;
  padding: 0 10px;
  ::placeholder {
    color: var(--ref-gray-400);
  }
`;

const UlStyled = styled.ul`
  position: absolute;
  top: 50px;
  width: 100%;
  border: 1px solid var(--ref-white);
  border-radius: 10px;
  text-align: left;
  padding: 10px;
  color: var(--ref-black);
  background-color: var(--ref-white);
  box-shadow: 0 0 10px 0 var(--ref-black-shadow-200);
  opacity: 0.9;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LiStyled = styled.li`
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  list-style-type: none;

  & strong {
    color: var(--sys-main-color);
  }

  &.active {
    background-color: var(--sys-main-color);
    color: var(--ref-white);
  }
  &.active strong {
    color: var(--ref-white);
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: var(--sys-main-color);
      color: var(--ref-white);
    }
    &:hover strong {
      color: var(--ref-white);
    }
  }
`;

export default SearchBar;
