import styled from "styled-components";
import { useEffect, useState } from "react";
import CabinetInfo from "./CabinetInfo";

const CabinetSection = ({ cabinets }) => {
  return (
    <CabinetSectionStyled>
      {cabinets.map((cabinet) => (
        <CabinetInfo key={cabinet.cabinetId} cabinet={cabinet} />
      ))}
    </CabinetSectionStyled>
  );
};

const CabinetSectionStyled = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, 90px);
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 800px;
  margin: 35px 0;
`;

export default CabinetSection;
