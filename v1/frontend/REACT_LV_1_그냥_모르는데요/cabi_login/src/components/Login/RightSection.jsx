import styled from "styled-components";
import logo from "../../assets/images/logo.svg";

function RightSection() {
  return (
    <RightSectionStyled className="rightLoginPage">
      <LoginCardStyled>
        <LogoImageStyled src={logo} alt="cabi logo" />
        <LogoTitleStyled className="logoTitle">
          <h1>Cabi</h1>
          <p>여러분의 일상을 가볍게</p>
        </LogoTitleStyled>
        <LoginButtonStyled>L O G I N</LoginButtonStyled>
      </LoginCardStyled>
    </RightSectionStyled>
  );
}

const RightSectionStyled = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 100%;

  background-color: var(--primary-color);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const LoginCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  width: 350px;
  height: 500px;

  background-color: var(--font-white-000);
  border-radius: 10px;
  padding: 85px 0;
  box-shadow: 10px 10px 40px 0px var(--shadow-color);
`;

const LogoImageStyled = styled.img`
  width: 70px;
  height: 70px;
`;

const LogoTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 40px;
    margin: -40px 0 16px 0;
  }

  p {
    font-size: 16px;
    color: var(--font-purple-000);
  }
`;

const LoginButtonStyled = styled.button`
  width: 200px;
  height: 60px;

  border-radius: 6px;
  background-color: var(--primary-color);
  color: var(--font-white-000);

  font-size: 18px;
  font-weight: 300;
`;

export default RightSection;
