import styled from "styled-components";
import { useState, useEffect } from "react";
import { getFloorNumbers, getSectionNumbers } from "../api/getCabinetData";

const LeftNavigation = ({
  floors,
  selectedFloor,
  selectedSection,
  setSelectedFloor,
  setSelectedSection,
}) => {
  const handleFloorClick = (number) => {
    if (number === selectedFloor.number) return;
    // console.log(`floor clicked: ${number}`);
    if (number === 0) {
      setSelectedFloor({
        number,
        sections: [],
      });
      setSelectedSection(null);
      return;
    }
    getSectionNumbers(number).then((sections) => {
      setSelectedFloor({
        number,
        sections,
      });
      setSelectedSection(sections[0]);
      // console.log(sections);
    });
  };

  const handleSectionClick = (section) => {
    if (section === selectedSection) return;
    // console.log(`section clicked: ${section}`);
    setSelectedSection(section);
  };

  return (
    <LeftNavigationStyled>
      <FloorNavigationStyled>
        <ul>
          {floors.map((floor) => (
            <li
              key={floor}
              className={floor === selectedFloor.number ? "selected" : ""}
              onClick={() => handleFloorClick(floor)}
            >
              {floor === 0 ? "Home" : `${floor}층`}
            </li>
          ))}
        </ul>
      </FloorNavigationStyled>
      <SectionNavigation>
        <ul>
          {selectedFloor.sections.map((section) => (
            <li
              key={section}
              className={section === selectedSection ? "selected" : ""}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </SectionNavigation>
    </LeftNavigationStyled>
  );
};

const LeftNavigationStyled = styled.aside`
  display: flex;
  flex-direction: row;

  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
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

  li:hover,
  .selected {
    background-color: var(--primary-color);
    color: var(--font-white-000);
  }
`;

const SectionNavigation = styled(FloorNavigationStyled)`
  width: 240px;
  height: 100%;
  padding: 30px 0;

  li {
    justify-content: flex-start;
    padding-left: 32px;

    width: 220px;
    height: 40px;
    margin: 0;
  }
`;

export default LeftNavigation;
