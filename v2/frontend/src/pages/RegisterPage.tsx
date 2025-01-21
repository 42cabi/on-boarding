import { useState } from "react";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <RegisterPageStyled id="RegisterPage">
      <RegisterTitleStyled>CABI-Onboarding</RegisterTitleStyled>
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
      <RegisterTextStyled>비밀번호는 변경할 수 없습니다</RegisterTextStyled>
      <RegisterButtonStyled>회원가입</RegisterButtonStyled>
    </RegisterPageStyled>
  );
};

const RegisterPageStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f9f9f9;
`;

const RegisterTitleStyled = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
  margin-bottom: 2rem;
`;

const RegisterTextStyled = styled.div`
  font-size: 1rem;
  color: #858486;
  line-height: 2rem;
  margin-top: 1rem;
`;

const RegisterButtonStyled = styled.button`
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

export default RegisterPage;
