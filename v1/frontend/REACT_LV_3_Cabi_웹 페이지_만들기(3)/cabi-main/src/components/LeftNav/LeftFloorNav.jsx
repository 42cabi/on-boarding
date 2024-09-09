import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFloors } from "../../api/axios.custom";

const StyledLeftFloorNav = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  box-sizing: border-box;
  border-right: 1px solid var(--box-line-color);
`;

const StyledLeftFloorBtn = styled.button`
  width: 70px;
  height: 48px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  background-color: var(--secondary-background-color);
  color: var(--primary-text-color);

  & + & {
    margin-top: 20px;
  }

  &:hover {
    background-color: var(--primary-background-color);
    color: var(--theme-text-color);
  }
`;

const StyledSelectedLeftFloorBtn = styled(StyledLeftFloorBtn)`
  background-color: var(--primary-background-color);
  color: var(--theme-text-color);
`;

const LeftFloorNav = ({ floor, setFloor }) => {
  const [floors, setFloors] = useState([]);

  const fetchFloors = async () => {
    const data = await getFloors();
    setFloors(data);
  };

  useEffect(() => {
    fetchFloors();
  }, []);

  return (
    <StyledLeftFloorNav>
      {floor === 0 ? (
        <StyledSelectedLeftFloorBtn onClick={() => setFloor(0)}>
          Home
        </StyledSelectedLeftFloorBtn>
      ) : (
        <StyledLeftFloorBtn onClick={() => setFloor(0)}>
          Home
        </StyledLeftFloorBtn>
      )}
      {floors.map((val) =>
        val === floor ? (
          <StyledSelectedLeftFloorBtn key={val} onClick={() => setFloor(val)}>
            {val}층
          </StyledSelectedLeftFloorBtn>
        ) : (
          <StyledLeftFloorBtn key={val} onClick={() => setFloor(val)}>
            {val}층
          </StyledLeftFloorBtn>
        )
      )}
    </StyledLeftFloorNav>
  );
};

export default LeftFloorNav;
