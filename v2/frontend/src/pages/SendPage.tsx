import styled from "styled-components";
import { ChangeEvent, useRef, useState } from "react";
import SearchInputField from "../components/SearchInputField";
import { Link, useNavigate } from "react-router";
import ImageUploader from "../components/ImageUploader";
import { sendMessage } from "../api/messages";
import { logout } from "../api/users";

const SendPage = () => {
  const [searchInputText, setSearchInputText] = useState<string>("");
  const messageTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>("");
  const [textLength, setTextLength] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const maxLength = 42;

  const handleInputChanged = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 글자 폭에 따른 자동 길이 조절
    const currentValue = messageTextAreaRef.current;
    if (!currentValue) return;
    currentValue.style.height = "auto";
    currentValue.style.height = `${currentValue.scrollHeight}px`;

    // 글자 수 세기 및 제한
    const inputText = e.target.value.slice(0, maxLength);
    setText(inputText);
    setTextLength(inputText.length);
  };

  const handleSubmit = async () => {
    if (!searchInputText) return alert("받는이를 입력해주세요.");
    if (!messageTextAreaRef.current?.value)
      return alert("메시지 내용을 입력해주세요.");
    const formData = new FormData();

    formData.append("receiverName", searchInputText);
    formData.append("context", messageTextAreaRef.current?.value || "");
    if (file) {
      formData.append("image", file);
    }

    console.log(formData);
    try {
      await sendMessage(formData);
      alert("메시지가 성공적으로 전송되었습니다.");
      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  const HandleLogout = async () => {
    try {
      await logout();
      alert("로그아웃.");
      navigate("/login");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <WrapperStyled>
      <LogoutWrapperStyled>
        <button onClick={HandleLogout}>로그아웃</button>
      </LogoutWrapperStyled>
      <LinkWrapperStyled>
        <Link to="/">덕담 보러 가기</Link>
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
              value={text}
              onChange={handleInputChanged}
              ref={messageTextAreaRef}
              $isFocus={isFocused}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <TextLengthStyled>
              {textLength} / {maxLength}
            </TextLengthStyled>
          </FormContainerStyled>
          <FormContainerStyled>
            <FormSubTitleStyled>
              사진<span> ( jpg, jpeg, png )</span>
            </FormSubTitleStyled>
            <ImageUploader setFile={setFile} file={file} />
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

const LogoutWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  button {
    width: 100px;
    height: 30px;
    color: var(--ref-gray-500);
    font-size: 0.875rem;
    border: 1px solid var(--ref-white);
    border-radius: 4px;
    cursor: pointer;
  }
`;

const LinkWrapperStyled = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  color: var(--ref-purple-500);
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
  background-color: var(--ref-gray-100);
  border-radius: 10px;
  padding: 30px 20px;
  gap: 20px;
`;

const FormContainerStyled = styled.div`
  width: 100%;
`;
const FormSubTitleStyled = styled.h3`
  font-size: 0.875rem;
  color: var(--ref-gray-500);
  margin-bottom: 10px;
  .red {
    color: var(--ref-red-200);
  }
`;

const SendTextFieldStyled = styled.textarea<{ $isFocus: boolean }>`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 16px;
  width: 100%;
  min-height: 40px;
  max-height: 200px;
  resize: none;
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

const TextLengthStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 12px;
  color: var(--ref-gray-600);
  text-align: right;
  margin-top: 4;
`;

const FormButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const FormButtonStyled = styled.button`
  width: 100px;
  height: 30px;
  font-size: 0.875rem;
  background-color: var(--ref-purple-500);
  color: var(--ref-white);
  font-weight: 700;
  border: 1px solid var(--ref-white);
  border-radius: 4px;
  cursor: pointer;
`;
