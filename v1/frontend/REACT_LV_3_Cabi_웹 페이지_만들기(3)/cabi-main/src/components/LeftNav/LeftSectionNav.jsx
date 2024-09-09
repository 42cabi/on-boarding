import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFloor } from "../../api/axios.custom";

const StyledLeftSectionNav = styled.div`
  width: 100%;
  padding: 32px 10px;
  box-sizing: border-box;
  border-right: 1px solid var(--box-line-color);
`;

const StyledLeftSectionBtn = styled.button`
  width: 219px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0px 30px;
  box-sizing: border-box;
  font-size: 16px;
  background-color: var(--secondary-background-color);
  color: var(--primary-text-color);

  & + & {
    margin-top: 2px;
  }

  &:hover {
    background-color: var(--primary-background-color);
    color: var(--theme-text-color);
  }
`;

const StyledSelectedLeftSectionBtn = styled(StyledLeftSectionBtn)`
  background-color: var(--primary-background-color);
  color: var(--theme-text-color);
`;

const LeftSectionNav = ({ floor, section, setSection }) => {
  const [sections, setSections] = useState([]);

  const fetchFloor = async () => {
    if (floor === 0) {
      setSection("Home");
      setSections([]);
      return;
    }
    const data = await getFloor(floor);
    setSection(data[0].sections[0].section);
    setSections(data[0].sections);
  };

  useEffect(() => {
    fetchFloor();
  }, [floor]);

  return (
    <StyledLeftSectionNav>
      {sections.map((data) =>
        section === data.section ? (
          <StyledSelectedLeftSectionBtn
            key={data.section}
            onClick={() => setSection(data.section)}
          >
            {data.section}
          </StyledSelectedLeftSectionBtn>
        ) : (
          <StyledLeftSectionBtn
            key={data.section}
            onClick={() => setSection(data.section)}
          >
            {data.section}
          </StyledLeftSectionBtn>
        )
      )}
    </StyledLeftSectionNav>
  );
};

export default LeftSectionNav;
