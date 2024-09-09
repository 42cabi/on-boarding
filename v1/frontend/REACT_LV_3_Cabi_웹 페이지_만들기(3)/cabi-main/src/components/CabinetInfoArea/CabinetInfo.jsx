import userIcon from "../../assets/user.svg";
import { styled } from "styled-components";

// 사물함 정보를 표시하는 CabinetInfo 컴포넌트를 작성합니다. 이 컴포넌트는 각 사물함의 상태와 사용자 정보를 표시합니다.
// {
//   "cabinetId": 1,
//   "status": "FULL",
//   "user": "user1"
// },

const StyledCabinetTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80px;
  height: 80px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 8px 8px 14px 8px;
  margin: 5px;

  background-color: ${({ $status }) =>
    $status === "FULL"
      ? `var(--teritary-background-color)`
      : `var(--primary-background-color)`};

  transition: 0.15s ease-in-out;

  &:hover {
    transform: scale(1.05);
    opacity: 0.8;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CabinetInfo = ({ cabinet }) => {
  return (
    <StyledCabinetTile $status={cabinet.status}>
      <div>
        <img src={userIcon} alt="user_icon" />
        <div>{cabinet.cabinetId}</div>
      </div>
      <div>{cabinet?.status === "FULL" ? cabinet.user : `-`}</div>
    </StyledCabinetTile>
  );
};

export default CabinetInfo;
