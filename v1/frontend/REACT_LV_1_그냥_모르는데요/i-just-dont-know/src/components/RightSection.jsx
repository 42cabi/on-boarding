import styled from "styled-components";
import box from "../img/box.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: var(--primary-background-color);
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const StyledLoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 330px;
  padding: 85px 0px;
  border-radius: 10px;
  background-color: var(--secondary-background-color);
  box-shadow: 10px 10px 40px 0px #00000040;
`;

const SyteledLogoImg = styled.img`
  width: 70px;
  height: 70px;
`;

const StyledTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.div`
  font-size: ${(props) => props.fontSize || `40px`};
  color: ${(props) => props.fontColor || "var(--primary-text-color)"};
`;

const StyledCustomTitle = styled(StyledTitle)`
  margin-bottom: 16px;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  background-color: var(--primary-background-color);
  color: var(--theme-text-color);
`;

const RightSection = () => {
  return (
    <StyledSection>
      <StyledLoginForm>
        <SyteledLogoImg src={box} alt="cabi-logo-image" />
        <StyledTextBox>
          <StyledCustomTitle>Cabi</StyledCustomTitle>
          <StyledTitle
            fontSize={`16px`}
            fontColor={`var(--secondary-text-color)`}
          >
            여러분의 일상을 가볍게
          </StyledTitle>
        </StyledTextBox>
        <StyledButton>L O G I N</StyledButton>
      </StyledLoginForm>
    </StyledSection>
  );
};

export default RightSection;
