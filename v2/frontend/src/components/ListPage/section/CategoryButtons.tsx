import styled from "styled-components";
import { Filter } from "../../../constant";

const CategoryButtons = ({
  currentCategory,
  handleChangedCategory,
}: {
  currentCategory: Filter;
  handleChangedCategory: (category: Filter) => void;
}) => {
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
  background-color: #d0d0d0;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  margin: 10px 0;
`;

const ButtonStyled = styled.button<{ $isActived: boolean }>`
  background-color: ${(props) => (props.$isActived ? `#9747FF` : `#d0d0d0`)};
  width: fit-content;
  height: 30px;
  border-radius: 10px;
  padding: 5px 10px;
  color: ${(props) => (props.$isActived ? `#ffffff` : `#000000`)};
  font-size: 14px;
  font-weight: 600;
`;

export default CategoryButtons;
