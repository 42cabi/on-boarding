import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [isIdFocused, setIsIdFocused] = useState(false);
  const [isPwFocused, setIsPwFocused] = useState(false);
  const navigate = useNavigate();
  const handleLoginButton = async () => {
    if (id === "" || pw === "") {
      alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    setIsClicked(true);
    try {
      await axios
        .post(
          "http://localhost:8080/users/login",
          {
            name: id,
            password: pw,
          },
          {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        )
        .then((data) => {
          if (data.status === 200) {
            navigate("/home");
          }
        });
    } catch (error: any) {
      alert(error.response.data.message);
    }
    setIsClicked(false);
    setId("");
    setPw("");
  };

  return (
    <Wrapper>
      <LoginCardStyled>
        <CardTitleStyled>Cabi - Onboarding</CardTitleStyled>
        <CardInputBoxStyled>
          <CardInputStyled
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="INTRA ID"
            disabled={isClicked ? true : false}
            onFocus={() => {
              setIsIdFocused(true);
            }}
            onBlur={() => {
              setIsIdFocused(false);
            }}
            $isFocus={isIdFocused}
          ></CardInputStyled>
          <CardInputStyled
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            type="password"
            placeholder="PASSWORD"
            disabled={isClicked ? true : false}
            onFocus={() => {
              setIsPwFocused(true);
            }}
            onBlur={() => {
              setIsPwFocused(false);
            }}
            onKeyUp={(e) => {
              if (e.key == "Enter") handleLoginButton();
            }}
            $isFocus={isPwFocused}
          ></CardInputStyled>
          <UrlSectionStyled onClick={() => navigate("/join")}>
            회원가입
          </UrlSectionStyled>
          <button onClick={handleLoginButton}>{"L O G I N"}</button>
        </CardInputBoxStyled>
      </LoginCardStyled>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* background-color: lightblue; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCardStyled = styled.div`
  /* background-color: green; */
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 85px 40px;
`;

const CardTitleStyled = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CardInputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  padding: 40px 0 10px;
`;

const CardInputStyled = styled.input<{ $isFocus: boolean }>`
  text-align: left;
  padding-left: 15px;
  /* font-family: var(--main-font); */
  font-size: 0.875rem;
  letter-spacing: 0.05rem;
  width: 100%;
  height: 48px;
  border-radius: 8px;
  margin-bottom: 8px;
  border: ${(props) =>
    props.$isFocus
      ? "1px solid var(--sys-main-color)"
      : "1px solid var(--ref-gray-400)"};
  color: var(--ref-black);
`;
const WarningMsgStyled = styled.span`
  color: var();
  font-size: 14px;
  margin-bottom: 10px;
`;

const UrlSectionStyled = styled.div`
  display: inline-block;
  font-size: 14px;
  text-decoration: underline;
  color: var(--sys-main-color);
  margin: 4px 0 10px 0;
  height: 16px;
  line-height: 14px;

  &:hover {
    cursor: pointer;
  }
`;

export default LoginPage;
