import React, { useState } from "react";
import styled from "styled-components";
import LoginInputField from "../components/LoginInputField";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <LoginPageStyled id="loginPage">
      <LoginTitleStyled>CABI-Onboarding</LoginTitleStyled>
      <LoginInputField
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
      />
      <LoginInputField
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="pw"
      />
      <RegisterStyled>회원가입</RegisterStyled>
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

const RegisterStyled = styled.div`
  font-size: 1rem;
  color: #9747ff;
  line-height: 2rem;
  margin-top: 1rem;
`;

const LoginButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  background-color: #9747ff;
  color: #ffffff;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;
`;

export default LoginPage;
