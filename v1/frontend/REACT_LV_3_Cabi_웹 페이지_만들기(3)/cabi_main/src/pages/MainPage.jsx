import styled from "styled-components";
import { useState, useEffect } from "react";
import { getFloorNumbers } from "../api/getCabinetData";
import TopNavigation from "../components/TopNavigation";
import LeftNavigation from "../components/LeftNavigation";
import CabinetMain from "../components/CabinetMain";

const MainPage = () => {
  const [floors, setFloors] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState({
    number: 0,
    sections: [],
  });
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    getFloorNumbers().then((floors) => {
      setFloors([0, ...floors]);
    });
    // console.log("useEffect");
  }, []);

  return (
    <MainPageStyled>
      <TopNavigation />
      <MainBodyStyled>
        <LeftNavigation
          floors={floors}
          selectedFloor={selectedFloor}
          selectedSection={selectedSection}
          setSelectedFloor={setSelectedFloor}
          setSelectedSection={setSelectedSection}
        />
        <CabinetMain floor={selectedFloor.number} section={selectedSection} />
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
