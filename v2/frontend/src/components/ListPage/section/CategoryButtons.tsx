import styled from "styled-components";
import { Filter } from "../../../constant";

interface FilterButtonProps {
  currentCategory: Filter;
  handleChangedCategory: (category: Filter) => void;
}

const CategoryButtons = ({
  currentCategory,
  handleChangedCategory,
}: FilterButtonProps) => {
  return (
    <ButtonWrapper>
      <ButtonStyled
        onClick={() => handleChangedCategory(Filter.TO_EVERYONE)}
        $isActived={currentCategory === Filter.TO_EVERYONE}
      >
        To.everyone
      </ButtonStyled>
      <ButtonStyled
        onClick={() => handleChangedCategory(Filter.TO_ME)}
        $isActived={currentCategory === Filter.TO_ME}
      >
        To.me
      </ButtonStyled>
      <ButtonStyled
        onClick={() => handleChangedCategory(Filter.FROM_ME)}
        $isActived={currentCategory === Filter.FROM_ME}
      >
        From.me
      </ButtonStyled>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  background-color: var(--ref-gray-300);
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  margin: 10px 0;
`;

const ButtonStyled = styled.button<{ $isActived: boolean }>`
  background-color: ${(props) =>
    props.$isActived ? `var(--ref-purple-500)` : `var(--ref-gray-300)`};
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${(props) =>
    props.$isActived ? `var(--ref-white)` : `var(--ref-black)`};
  font-size: 14px;
  font-weight: 600;
`;

export default CategoryButtons;
