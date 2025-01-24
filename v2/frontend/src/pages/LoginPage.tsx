import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserInputField from "../components/UserInputField";
import { ReactComponent as NewYearImg } from "../assets/images/newYear.svg";
import { login } from "../api/users";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const idRegex = /^[A-Za-z0-9]{1,10}$/;
  const pwRegex = /^(?!.*(.)\1{3})[A-Za-z0-9]+$/;

  useEffect(() => {});

  const handleLogin = async () => {
    try {
      const data = { name: id, password: pw };
      const response = await login(data);
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <LoginPageStyled id="LoginPage">
      <NewYearImg />
      <LoginTitleStyled>로그인</LoginTitleStyled>
      <form>
        <UserInputField
          type="text"
          value={id}
          pattern={idRegex.source}
          autocomplete="username"
          onChange={(e) => setId(e.target.value)}
          placeholder="id"
        />
        <UserInputField
          type="password"
          value={pw}
          pattern={pwRegex.source}
          autocomplete="current-password"
          onChange={(e) => setPw(e.target.value)}
          placeholder="pw"
        />
      </form>
      <LinkStyled to="/register">회원가입</LinkStyled>
      <LoginButtonStyled onClick={handleLogin}>로그인</LoginButtonStyled>
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

export default LoginPage;
