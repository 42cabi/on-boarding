import styled from "styled-components";

const LoginTemplate = () => {
  return (
    <LoginPageStyled id="loginPage">
      <LoginTitleStyled>CABI-Onboarding</LoginTitleStyled>
      {/* <UserInputStyled>value={userId}</UserInputStyled>
      <UserInputStyled>value={userPW}</UserInputStyled> */}
    </LoginPageStyled>
  );
};

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LoginTitleStyled = styled.div`
  font-size: 2rem;
  font-weight: 700;
  line-height: 3rem;
`;

// const UserInputStyled = styled.input<{ isFocus: boolean }>`
//   text-align: left;
// `;
