import { useState } from "react";
import LeftNav from "../../components/LeftNav/LeftNav";
import TopNav from "../../components/TopNav/TopNav";
import styled from "styled-components";
import CabinetInfoArea from "../../components/CabinetInfoArea/CabinetInfoArea";
import TabBar from "../../components/TabBar/TabBar";

const StyledMain = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;

  @media all and (max-width: 1100px) {
    flex-direction: column;
  }
`;

const MainPage = () => {
  const [floor, setFloor] = useState(0);
  const [section, setSection] = useState();

  return (
    <>
      <TopNav />
      <StyledMain>
        <LeftNav
          floor={floor}
          setFloor={setFloor}
          section={section}
          setSection={setSection}
        />
        <CabinetInfoArea
          floor={floor}
          section={section}
          setSection={setSection}
        />
        <TabBar floor={floor} setFloor={setFloor} />
      </StyledMain>
    </>
  );
};

export default MainPage;
