import styled from "styled-components";
import board from "../../assets/images/login-board.svg";

function LeftSection() {
  return (
    <LeftSectionStyled className="leftLoginPage">
      <div>
        <MainTitleStyled>42서울 캐비닛 서비스</MainTitleStyled>
        <MainTitleStyled $fontColor="var(--font-purple-100)">
          여러분의 일상을 가볍게
        </MainTitleStyled>
      </div>
      <ImageStyled src={board} alt="login board"></ImageStyled>
      <div>
        <SubTitleStyled>
          <TextHighlightStyled>Cabi</TextHighlightStyled>로
        </SubTitleStyled>
        <SubTitleStyled>일상의 무게를 덜어보세요.</SubTitleStyled>
      </div>
    </LeftSectionStyled>
  );
}

const LeftSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
  height: 100%;
  padding-left: 7%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MainTitleStyled = styled.p`
  font-size: 32px;
  font-weight: 700;
  padding: 10px 0;
  color: ${(props) => props.$fontColor || "var(--font-black-000)"};
`;

const ImageStyled = styled.img`
  width: 446px;
  height: 388px;
  padding: 10% 0;
`;

const SubTitleStyled = styled.p`
  font-size: 28px;
  font-weight: 700;
  padding: 10px 0;
  color: var(--font-black-000);
`;

const TextHighlightStyled = styled.span`
  font-size: 28px;
  font-weight: 700;
  padding: 10px 0;
  color: var(--font-purple-000);
`;

export default LeftSection;
