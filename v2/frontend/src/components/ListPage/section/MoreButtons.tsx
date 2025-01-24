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
`;

export default MoreButtons;
