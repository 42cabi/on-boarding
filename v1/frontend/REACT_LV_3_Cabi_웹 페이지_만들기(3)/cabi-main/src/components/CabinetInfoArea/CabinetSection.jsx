import styled from "styled-components";
import CabinetInfo from "./CabinetInfo";

// 사물함 정보를 그룹화하여 표시하는 CabinetSection 컴포넌트를 작성합니다.

const StyledCabinetSection = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  justify-content: center;
  margin-top: 30px;

  @media screen and (min-width: 1101px) {
    grid-template-columns: repeat(8, 90px);
  }
  @media all and (min-width: 768px) and (max-width: 1100px) {
    grid-template-columns: repeat(6, 90px);
  }
  @media all and (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(4, 90px);
  }
  @media all and (max-width: 479px) {
    grid-template-columns: repeat(2, 90px);
  }
`;

const CabinetSection = ({ cabinets }) => {
  return (
    <StyledCabinetSection>
      {cabinets.map((cabinetInfo, index) => (
        <CabinetInfo cabinet={cabinetInfo} key={index} />
      ))}
    </StyledCabinetSection>
  );
};

export default CabinetSection;
