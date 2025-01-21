import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";
import { ReactComponent as NewYearImg } from "../assets/images/newYear.svg";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <LoginPageStyled id="loginPage">
      <NewYearImg />
      <LoginSectionStyled>
        <LoginTitleStyled>CABI-Onboarding</LoginTitleStyled>
        <UserInputField
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />
        <UserInputField
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="pw"
        />
        <LinkStyled to="/register">회원가입</LinkStyled>
        <LoginButtonStyled>로그인</LoginButtonStyled>
      </LoginSectionStyled>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const LoginSectionStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const LoginTitleStyled = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const LinkStyled = styled(Link)`
  font-size: 1rem;
  color: #9747ff;
  line-height: 2rem;
  margin-top: 1rem;
`;

const LoginButtonStyled = styled.button`
  width: 350px;
  height: 56px;
  padding: 0.8rem 1rem;
  background-color: #9747ff;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

export default LoginPage;
