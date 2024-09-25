import styled from "styled-components";
import { useState, useEffect } from "react";
import { fetchFloorNumbers, fetchSectionsData } from "../api/getCabinetData";

const LeftNavigation = () => {
  const [floorData, setFloorData] = useState([]);
  const [firstFloor, setFirstFloor] = useState(0);
  const [firstSection, setFirstSection] = useState();
  const [sectionData, setSectionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchFloorNumbers();
      setFloorData(response);
    };
    fetchData();
  }, []);

  const renderFloorData = () => {
    return floorData?.map((item, index) => <li key={index}>{item}층</li>);
  };

  return (
    <LeftNavigationStyled>
      <FloorNavigationStyled>
        <ul>
          <li>Home</li>
          {renderFloorData()}
        </ul>
      </FloorNavigationStyled>
      <SectionNavigation>
        <ul></ul>
      </SectionNavigation>
    </LeftNavigationStyled>
  );
};

const LeftNavigationStyled = styled.aside`
  display: flex;
  flex-direction: row;

  height: 100%;
`;

const FloorNavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90px;
  height: 100%;
  color: var(--font-gray-000);
  font-family: "Inter", sans-serif;
  border-right: 1px solid var(--line-color);

  li {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 70px;
    height: 48px;
    margin: 30px 0;
    border-radius: 10px;
  }

  li:hover {
    background-color: var(--primary-color);
    color: var(--font-white-000);
  }
`;

const SectionNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 240px;
  height: 100%;
  padding: 30px 0;
  color: var(--font-gray-000);
  font-family: "Inter", sans-serif;
  border-right: 1px solid var(--line-color);

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 32px;

    width: 220px;
    height: 40px;
    border-radius: 10px;
  }

  li:hover {
    background-color: var(--primary-color);
    color: var(--font-white-000);
  }
`;

export default LeftNavigation;
