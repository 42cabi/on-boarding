import styled from "styled-components";
import { useRef, useState } from "react";
import SearchInputField from "../components/SearchInputField";
import { Link } from "react-router";
import axios from "axios";
import ImageUploader from "../components/ImageUploader";


const SendPage = () => {
  const [searchInputText, setSearchInputText] = useState("");
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async () => {
    const formData = new FormData();

    formData.append("receiverName", searchInputText);
    formData.append("context", messageTextAreaRef.current?.value || "");
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axios.post("/messages", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("메시지가 성공적으로 전송되었습니다.");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <WrapperStyled>
      <LinkWrapperStyled>
        <Link to="/list">덕담 보러 가기</Link>
      </LinkWrapperStyled>
      <TitleContainerStyled>덕담 보내기</TitleContainerStyled>
      <ContainerStyled>
        <FormWrapperStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              받는이 ( Intra ID / @everyone )<span className="red"> *</span>
            </FormSubTitleStyled>
            <SearchInputField setSearchInputText={setSearchInputText} />
          </FormContainerStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              메시지 내용<span className="red"> *</span>
            </FormSubTitleStyled>
            <SendTextFieldStyled
              placeholder="메시지 내용을 입력하세요"
              ref={messageTextAreaRef}
              $isFocus={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            {/* textarea length */}
          </FormContainerStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              사진<span> ( jpg, jpeg, png )</span>
            </FormSubTitleStyled>
            <ImageUploader
            setFile={setFile}
            file={file}
            />
          </FormContainerStyled>
          <FormButtonContainerStyled>
            <FormButtonStyled onClick={handleSubmit}>보내기</FormButtonStyled>
          </FormButtonContainerStyled>
        </FormWrapperStyled>
      </ContainerStyled>
    </WrapperStyled>
  );
};

export default SendPage;

const WrapperStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;
`;

const LinkWrapperStyled = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  color: #9747ff;
  font-size: 0.875rem;
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

const FormWrapperStyled = styled.div`
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

const SendTextFieldStyled = styled.textarea<{ $isFocus: boolean }>`
  /* TODO: font 및 텍스트 크기 조정(통일) */
  /* font-family: "Noto Sans KR", sans-serif; */
  width: 100%;
  height: 40px;
  background-color: var(--ref-white);
  border-radius: 8px;
  border: 2px solid
    ${({ $isFocus }) => ($isFocus ? "var(--ref-purple-500)" : "transparent")};
  text-align: left;
  padding: 10px;
  ::placeholder {
    color: var(--ref-gray-400);
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

`;
