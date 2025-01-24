import { useState } from "react";
import { ReactComponent as NewYearImg } from "../assets/images/newYear.svg";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";
import { register } from "../api/users";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleRegister = async () => {
    const idRegex = /^[A-Za-z0-9]{1,10}$/;
    const pwRegex = /^[A-Za-z0-9]+$/;
    const fourInARowRegex = /(.)\1{3}/;

    const isValid =
      idRegex.test(id) && pwRegex.test(pw) && !fourInARowRegex.test(pw);

    if (!isValid) {
      alert("로그인 실패");
      return;
    }

    try {
      const data = { name: id, password: pw };
      const response = await register(data);
    } catch (error) {
      // TODO: 에러 처리
    }
  };
  return (
    <RegisterPageStyled id="RegisterPage">
      <NewYearImg />
      <RegisterTitleStyled>CABI-Onboarding</RegisterTitleStyled>
      <UserInputField
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="id"
      />
      <UserInputField
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="pw"
      />
      <RegisterTextStyled>비밀번호는 변경할 수 없습니다</RegisterTextStyled>
      <RegisterButtonStyled onClick={handleRegister}>
        회원가입
      </RegisterButtonStyled>
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
  margin-top: 2rem;
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
  height: 54px;
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
