import { useEffect, useState } from "react";
import { getFloors } from "../../api/axios.custom";
import styled from "styled-components";

const StyledTabBar = styled.div`
  width: 100%;
  height: 60px;
  display: none;
  padding: 10px 10px;
  box-sizing: border-box;

  border-top: 1px solid var(--box-line-color);
  background-color: var(--secondary-background-color);

  @media all and (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`;

const StyledTabBarBtn = styled.button`
  width: 60px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;

  background-color: var(--secondary-background-color);
  color: var(--primary-text-color);

  &:hover {
    background-color: var(--primary-background-color);
    color: var(--theme-text-color);
  }
`;

const StyledTabBarBtnSelected = styled(StyledTabBarBtn)`
  background-color: var(--primary-background-color);
  color: var(--theme-text-color);
`;

const TabBar = ({ floor, setFloor }) => {
  const [floors, setFloors] = useState([]);

  const fetchFloors = async () => {
    const data = await getFloors();
    setFloors(data);
  };

  useEffect(() => {
    fetchFloors();
  }, []);
  return (
    <StyledTabBar>
      {floor === 0 ? (
        <StyledTabBarBtnSelected onClick={() => setFloor(0)}>
          Home
        </StyledTabBarBtnSelected>
      ) : (
        <StyledTabBarBtn onClick={() => setFloor(0)}>Home</StyledTabBarBtn>
      )}
      {floors.map((val) =>
        val === floor ? (
          <StyledTabBarBtnSelected key={val} onClick={() => setFloor(val)}>
            {val}층
          </StyledTabBarBtnSelected>
        ) : (
          <StyledTabBarBtn key={val} onClick={() => setFloor(val)}>
            {val}층
          </StyledTabBarBtn>
        )
      )}
    </StyledTabBar>
  );
};

export default TabBar;
