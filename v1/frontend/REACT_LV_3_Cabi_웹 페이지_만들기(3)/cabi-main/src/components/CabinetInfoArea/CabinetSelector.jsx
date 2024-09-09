import { useEffect, useState } from "react";
import { getFloor } from "../../api/axios.custom";
import { styled } from "styled-components";

const StyledButton = styled.button`
  font-size: 16px;
`;

const CabinetSelector = ({ floor, section, setSection }) => {
  const [sections, setSections] = useState([]);

  const fetchFloor = async () => {
    if (floor === 0) {
      setSections([]);
      return;
    }
    const data = await getFloor(floor);
    setSections(data[0].sections);
  };

  useEffect(() => {
    fetchFloor();
  }, [floor]);

  const selectBefore = () => {
    const idx = sections.findIndex((obj) => obj.section == section);
    if (idx === 0) {
      setSection(sections[sections.length - 1].section);
    } else {
      setSection(sections[idx - 1].section);
    }
  };

  const selectNext = () => {
    const idx = sections.findIndex((obj) => obj.section == section);
    if (idx === sections.length - 1) {
      setSection(sections[0].section);
    } else {
      setSection(sections[idx + 1].section);
    }
  };

  return (
    <>
      <StyledButton onClick={() => selectBefore()}> &lt; </StyledButton>
      {floor}층 - {section}
      <StyledButton onClick={() => selectNext()}> &gt; </StyledButton>
    </>
  );
};

export default CabinetSelector;
