import styled from "styled-components";
import intro from "../img/intro-img.svg";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  height: 100%;
  padding-left: 7%;
  box-sizing: border-box;
  background-color: var(--secondary-background-color);
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledText = styled.span`
  font-size: ${(props) => props.fontSize || "32px"};
  font-weight: 700;
  height: 48px;
  color: ${(props) => props.fontColor || "var(--primary-text-color)"};
`;

const StyledImg = styled.img`
  margin: 10% 10% 10% 0;
`;

const LeftSection = () => {
  return (
    <StyledSection>
      <div>
        <StyledText>42서울 캐비닛 서비스</StyledText>
      </div>
      <div>
        <StyledText fontColor={`var(--secondary-text-color)`}>
          여러분의 일상을 가볍게
        </StyledText>
      </div>
      <StyledImg src={intro} alt="intro-image" />
      <div>
        <StyledText fontColor={`var(--tertiary-text-color)`} fontSize={`28px`}>
          Cabi
        </StyledText>
        <StyledText fontSize={`28px`}>로</StyledText>
      </div>
      <div>
        <StyledText fontSize={`28px`}>일상의 무게를 덜어보세요.</StyledText>
      </div>
    </StyledSection>
  );
};

export default LeftSection;
