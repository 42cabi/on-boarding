import styled from "styled-components";
import available from "../assets/images/user_available.svg";
import full from "../assets/images/user_full.svg";

const CabinetInfo = ({ cabinet }) => {
  const className = cabinet.status === "FULL" ? "full" : "available";
  const userImg = cabinet.status === "FULL" ? full : available;

  return (
    <CabinetInfoStyled className={className}>
      <div>
        <img src={userImg} alt={className} />
        <p>{cabinet.cabinetId}</p>
      </div>
      <p>{cabinet.user ? cabinet.user : ""}</p>
    </CabinetInfoStyled>
  );
};

const CabinetInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 80px;
  height: 80px;
  margin: 5px 5px;
  padding: 10px;

  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &.full {
    color: var(--font-black-100);
    background-color: var(--full-cabinet-color);
  }

  &.available {
    color: var(--font-white-000);
    background-color: var(--available-cabinet-color);
  }
`;

export default CabinetInfo;
