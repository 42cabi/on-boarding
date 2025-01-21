import { useState } from "react";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <LoginPageStyled id="loginPage">
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
      <RegisterNavStyled>회원가입</RegisterNavStyled>
      <LoginButtonStyled>로그인</LoginButtonStyled>
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const LoginTitleStyled = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  margin-bottom: 2rem;
`;

const RegisterNavStyled = styled.div`
  font-size: 1rem;
  color: #9747ff;
  line-height: 2rem;
  margin-top: 1rem;
`;

const LoginButtonStyled = styled.button`
  width: 350px;
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
