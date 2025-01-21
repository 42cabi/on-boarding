import { useState } from "react";
import styled from "styled-components";

const SearchInputField = ({
  placeHolder,
  inputText,
}: {
  placeHolder: string;
  inputText: React.RefObject<HTMLInputElement>;
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SearchInputFieldStyled
      placeholder={placeHolder}
      ref={inputText}
      type="text"
      $isFocus={isFocused}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      // onChange={() => debounce("SlackAlarmSearch", typeSearchInput, 300)}
      // onKeyDown={handleInputKey}
    />
  );
};

const SearchInputFieldStyled = styled.input<{ $isFocus: boolean }>`
  width: 100%;
  height: 40px;
  background-color: var(--ref-white);
  border-radius: 8px;
  border: 2px solid
    ${({ $isFocus }) => ($isFocus ? "var(--ref-purple-500)" : "transparent")};
  text-align: left;
  padding: 0 10px;
  ::placeholder {
    color: var(--ref-gray-400);
  }
`;

export default SearchInputField;
