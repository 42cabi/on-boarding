import React, { useState } from "react";
import styled from "styled-components";

type LoginInputFieldProps = {
  type?: string;
  value: string;
  pattern?: string;
  autocomplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const LoginInputField: React.FC<LoginInputFieldProps> = ({
  type,
  value,
  pattern,
  autocomplete,
  onChange,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <LoginInputFieldWrapper>
      <LoginInputFieldStyled
        type={type}
        value={value}
        pattern={pattern}
        autoComplete={autocomplete}
        onChange={onChange}
        placeholder={placeholder}
        $isFocus={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </LoginInputFieldWrapper>
  );
};

const LoginInputFieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
`;

const LoginInputFieldStyled = styled.input<{ $isFocus: boolean }>`
  width: 350px;
  height: 40px;
  padding: 0.5rem 0.8rem;
  text-align: left;
  font-size: 1rem;
  border: 2px solid
    ${({ $isFocus }) =>
      $isFocus ? "var(--ref-purple-500)" : "var(--ref-gray-300)"};
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;

  &::placeholder {
    color: var(--ref-gray-500);
  }
`;

export default LoginInputField;
