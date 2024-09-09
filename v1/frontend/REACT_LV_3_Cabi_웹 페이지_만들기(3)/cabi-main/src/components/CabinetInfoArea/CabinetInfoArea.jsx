import { useEffect, useState } from "react";
import { getCabinets } from "../../api/axios.custom";
import CabinetSection from "./CabinetSection";
import styled from "styled-components";
import CabinetSelector from "./CabinetSelector";

const StyledCabinetInfoArea = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  box-sizing: border-box;

  @media all and (max-width: 1100px) {
    height: calc(100% - 80px - 60px);
  }
`;

const StyledCabinetInfoHeader = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
  color: var(--primary-text-color);
`;

const StyledWarning = styled.div`
  margin-top: 20px;
  font-size: 16px;
  color: var(--primary-text-color);
`;

const CabinetInfoArea = ({ floor, section, setSection }) => {
  const [cabinets, setCabinets] = useState([]);

  const fetchCabinets = async () => {
    const data = await getCabinets(floor, section);
    setCabinets(data);
  };

  useEffect(() => {
    fetchCabinets();
  }, [floor, section]);

  return (
    <StyledCabinetInfoArea>
      {floor === 0 ? (
        <StyledCabinetInfoHeader>
          층과 섹션을 선택해주세요.
        </StyledCabinetInfoHeader>
      ) : (
        <StyledCabinetInfoHeader>
          <CabinetSelector
            floor={floor}
            section={section}
            setSection={setSection}
          />
        </StyledCabinetInfoHeader>
      )}
      {cabinets?.length > 0 ? (
        <CabinetSection cabinets={cabinets} />
      ) : (
        <StyledWarning>데이터가 없습니다.</StyledWarning>
      )}
    </StyledCabinetInfoArea>
  );
};

export default CabinetInfoArea;
