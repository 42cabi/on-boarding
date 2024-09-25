import styled from "styled-components";
import { useState } from "react";
import TopNavigation from "../components/TopNavigation";
import LeftNavigation from "../components/LeftNavigation";

const MainPage = () => {
  return (
    <MainPageStyled>
      <TopNavigation />
      <MainBodyStyled>
        <LeftNavigation />
      </MainBodyStyled>
    </MainPageStyled>
  );
};

const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainBodyStyled = styled.div`
  display: flex;
  flex-direction: row;
  height: calc(100% - 80px);
`;

export default MainPage;
