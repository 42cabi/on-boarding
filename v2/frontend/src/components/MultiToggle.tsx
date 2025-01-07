import React, { useState } from "react";
import styled from "styled-components";
import { ToggleOption } from "../ThanksPage";

export interface MultiToggleProps {
  selected: ToggleOption;
  setSelected: (selected: ToggleOption) => void;
  handleToggleChange: (selected: ToggleOption) => void;
}

// Toggle 옵션과 해당 레이블을 매핑한 배열
const toggleOptions: { value: ToggleOption; label: string }[] = [
  { value: "All", label: "To.everyone" },
  { value: "Send", label: "From.me" },
  { value: "Receive", label: "To.me" },
];

const MultiToggle = ({
  selected,
  setSelected,
  handleToggleChange,
}: MultiToggleProps) => {
  const handleToggle = (option: ToggleOption) => {
    handleToggleChange(option);
    setSelected(option);
  };

  return (
    <WrapperStyled>
      {toggleOptions.map(({ value, label }) => (
        <ToggleButton
          key={value}
          $active={selected === value}
          onClick={() => handleToggle(value)}
        >
          {label}
        </ToggleButton>
      ))}
    </WrapperStyled>
  );
};

export default MultiToggle;

const WrapperStyled = styled.div`
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  width: 270px;
  height: 30px;
  background-color: var(--ref-gray-100);
`;

const ToggleButton = styled.button<{ $active: boolean }>`
  flex: 1;
  background-color: ${({ $active }) =>
    $active ? "var(--sys-main-color)" : "var(--ref-gray-100)"};
  color: ${({ $active }) =>
    $active ? "var(--ref-gray-100)" : "var(--ref-black)"};
  border: none;
  cursor: pointer;

  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  line-height: 1.125rem;
  height: 100%;
  transition: background-color 0.3s;
`;
