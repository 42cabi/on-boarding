import styled from "styled-components";

const SendPage = () => {
  return (
    <WrapperStyled>
      <TitleContainerStyled>알림</TitleContainerStyled>
      <ContainerStyled>
        <FormWappingStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              받는이 ( Intra ID / @everyone )<span className="red"> *</span>
            </FormSubTitleStyled>
            {/* <SlackAlarmSearchBar
                searchInput={receiverInputRef}
                renderReceiverInput={renderReceiverInput}
              /> */}
          </FormContainerStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              메시지 내용<span className="red"> *</span>
            </FormSubTitleStyled>
          </FormContainerStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              사진<span> ( jpg, jpeg, png )</span>
            </FormSubTitleStyled>
          </FormContainerStyled>
          <FormButtonContainerStyled>
            <FormButtonStyled>보내기</FormButtonStyled>
          </FormButtonContainerStyled>
        </FormWappingStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};

export default SendPage;

const WrapperStyled = styled.div`
  /* height: 100%; */
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;

const TitleContainerStyled = styled.div`
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--service-man-title-border-btm-color);
  margin-bottom: 70px;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02rem;
  margin-bottom: 20px;
`;

const ContainerStyled = styled.div`
  width: 80%;
  max-width: 1000px;
  margin-bottom: 40px;
`;

const SubTitleStyled = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 20px;
`;

const CapsuleWrappingStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const CapsuleButtonStyled = styled.span<{
  channelBtnIsClicked?: boolean;
  templateBtnIsClicked?: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: #f5f5f5;
  border: 1px solid #ffffff;
  border-radius: 22px;
  cursor: pointer;
`;

const FormWappingStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 30px 20px;
  gap: 20px;
`;

const FormContainerStyled = styled.div`
  width: 100%;
`;
const FormSubTitleStyled = styled.h3`
  font-size: 0.875rem;
  color: #7b7b7b;
  margin-bottom: 10px;
  .red {
    color: #ff4e4e;
  }
`;

const FormTextareaStyled = styled.textarea`
  color: var(--normal-text-color);
  box-sizing: border-box;
  width: 100%;
  min-height: 200px;
  background-color: #3d3f40;
  border-radius: 8px;
  border: 1px solid #ffffff;
  resize: none;
  outline: none;
  :focus {
    border: 1px solid #9747ff;
  }
  text-align: left;
  padding: 10px;
  ::placeholder {
    color: var(--line-color);
  }
`;

const FormButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FormButtonStyled = styled.button`
  width: auto;
  height: auto;
  padding: 10px 16px;
  font-size: 0.875rem;
  background-color: #9747ff;
  color: #ffffff;
  font-weight: 700;
  border: 1px solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  /* :hover {
    opacity: 0.85;
  } */
`;
