import { useState } from "react";
import { ReactComponent as NewYearImg } from "../assets/images/newYear.svg";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";
import { register } from "../api/users";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const idRegex = "/^[A-Za-z0-9]{1,10}$/";
  const pwRegex = "/^(?!.*(.)\\1{3})[A-Za-z0-9]+$/";

  const handleRegister = async () => {
    try {
      const data = { name: id, password: pw };
      const response = await register(data);
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };
  return (
    <RegisterPageStyled id="RegisterPage">
      <NewYearImg />
      <RegisterTitleStyled>회원가입</RegisterTitleStyled>
      <form>
        <UserInputField
          type="text"
          value={id}
          pattern={idRegex}
          autocomplete="username"
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />
        <UserInputField
          type="password"
          value={pw}
          pattern={pwRegex}
          autocomplete="current-password"
          onChange={(e) => setPw(e.target.value)}
          placeholder="pw"
        />
      </form>
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
