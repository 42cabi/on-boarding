import styled from "styled-components";
import { Filter } from "../../constant";

const CategoryButtons = ({
  currentCategory,
  handleChangedCategory,
}: {
  currentCategory: Filter;
  handleChangedCategory: (category: Filter) => void;
}) => {
  return (
    <div>
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
    </div>
  );
};

const ButtonStyled = styled.button<{ $isActived: boolean }>`
  background-color: ${(props) => (props.$isActived ? "red" : "blue")};
`;

export default CategoryButtons;
