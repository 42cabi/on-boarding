import styled from "styled-components";

interface MoreButtonsProps {
  fetchItems: () => void;
  isLoading: boolean;
  isLast: boolean;
}

const MoreButtons = ({ fetchItems, isLoading, isLast }: MoreButtonsProps) => {
  return (
    <MoreButtonStyled onClick={fetchItems} $isLast={isLast}>
      {isLoading ? `Loading...` : `더보기`}{" "}
    </MoreButtonStyled>
  );
};

const MoreButtonStyled = styled.button<{ $isLast: boolean }>`
  display: ${(props) => (props.$isLast ? "none" : "block")};
  width: 100%;
  padding: 12px;
  margin: 20px 0;
  border-radius: 8px;
  background: #9747ff;
  font-size: 16px;
  font-weight: 500;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #8010ff;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export default MoreButtons;
