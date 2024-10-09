import styled from "styled-components";
import LeftSection from "../components/Login/LeftSection";
import RightSection from "../components/Login/RightSection";

function LoginPage() {
  return (
    <LoginPageStyled id="loginPage">
      <LeftSection />
      <RightSection />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 100%;
`;

export default LoginPage;
