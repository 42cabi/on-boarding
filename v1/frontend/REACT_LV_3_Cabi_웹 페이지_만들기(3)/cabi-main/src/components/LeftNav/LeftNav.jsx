import styled from "styled-components";
import LeftFloorNav from "./LeftFloorNav";
import LeftSectionNav from "./LeftSectionNav";

const StyeldLeftNav = styled.div`
  width: 330px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  @media all and (max-width: 1100px) {
    display: none;
  }
`;

const LeftNav = ({ floor, setFloor, section, setSection }) => {
  return (
    <StyeldLeftNav>
      <LeftFloorNav floor={floor} setFloor={setFloor} />
      <LeftSectionNav floor={floor} section={section} setSection={setSection} />
    </StyeldLeftNav>
  );
};

export default LeftNav;
