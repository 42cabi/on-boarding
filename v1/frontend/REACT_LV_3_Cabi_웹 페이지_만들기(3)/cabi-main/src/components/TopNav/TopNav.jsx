import cabiLogo from "../../assets/cabi-logo.svg";
import profileIcon from "../../assets/profile-circle.svg";
import mapIcon from "../../assets/map.svg";
import styled from "styled-components";

const StyledTopNav = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 80px;
  padding: 0px 28px;
  box-sizing: border-box;

  background-color: var(--primary-background-color);

  > div {
    display: flex;
    align-items: center;
  }
`;

const StyledLogo = styled.img`
  width: 35px;
  height: 35px;
`;

const StyledServiceName = styled.div`
  font-size: 24px;
  margin-left: 40px;
  color: var(--theme-text-color);
`;

const StyledIcon = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

const TopNav = () => {
  return (
    <StyledTopNav>
      <div>
        <StyledLogo src={cabiLogo} alt="cabi_logo" />
        <StyledServiceName>Cabi</StyledServiceName>
      </div>
      <div>
        <StyledIcon src={profileIcon} alt="profile_icon" />
        <StyledIcon src={mapIcon} alt="map_icon" />
      </div>
    </StyledTopNav>
  );
};

export default TopNav;
