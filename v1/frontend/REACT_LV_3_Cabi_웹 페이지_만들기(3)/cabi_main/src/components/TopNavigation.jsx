import styled from "styled-components";
import logo from "../assets/images/logo.svg";
import account from "../assets/images/account_circle.svg";
import packages from "../assets/images/package.svg";

const TopNavigation = () => {
  return (
    <TopNavigationStyled>
      <TopLeftSection>
        <img src={logo} alt="cabi logo" />
        <p>Cabi</p>
      </TopLeftSection>
      <TopRightNavigation>
        <img src={account} alt="account" />
        <img src={packages} alt="package" />
      </TopRightNavigation>
    </TopNavigationStyled>
  );
};

const TopNavigationStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 80px;
  background-color: var(--primary-color);
  padding: 0 20px;
`;

const TopLeftSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 122px;
  height: 35px;

  img {
    width: 50px;
    height: 35px;
    justify-content: center;
  }

  p {
    font-family: "Do Hyeon", sans-serif;
    font-size: 24px;
    font-weight: 400;
    color: var(--font-white-000);
  }
`;

const TopRightNavigation = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90px;
  height: 40px;
`;

export default TopNavigation;
