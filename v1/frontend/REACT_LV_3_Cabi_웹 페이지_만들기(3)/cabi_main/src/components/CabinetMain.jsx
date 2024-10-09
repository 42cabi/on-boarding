import styled from "styled-components";
import { useEffect, useState } from "react";
import { getCabinetInfo } from "../api/getCabinetData";
import CabinetSection from "./CabinetSection";

const CabinetMain = ({ floor, section }) => {
  const [cabinetData, setCabinetData] = useState([]);

  useEffect(() => {
    if (section != null) {
      getCabinetInfo(floor, section).then((data) => {
        // console.log(`[ floor: ${floor}, section: ${section} ]`);
        // console.log(data);
        setCabinetData(data);
      });
    }
  }, [floor, section]);

  return (
    <CabinetMainStyled>
      {section ? (
        <>
          <p>{`${floor}층 - ${section}`}</p>
          <CabinetSection cabinets={cabinetData} />
        </>
      ) : (
        <p>no cabinets in this section</p>
      )}
    </CabinetMainStyled>
  );
};

const CabinetMainStyled = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;

  width: calc(100vw - 90px - 240px);
  height: 100%;
  color: var(--font-gray-000);
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default CabinetMain;
