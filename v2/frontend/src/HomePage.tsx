import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import SearchBar from "./components/SearchBar";
import exitButtonIcon from "./svg/exitButton.svg";

export const CLUB_MEMO_MAX_LENGTH = 42;

const HomePage = () => {
  const navigate = useNavigate();
  const receiverInputRef = useRef<HTMLInputElement>(null);
  const msgTextAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [file, setFile] = useState<null | File>(null);
  const [searchList, setSearchList] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [totalLength, setTotalLength] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const [msgContent, setMsgContent] = useState<string>("");

  const handleSubmitButton = async () => {
    if (!receiverInputRef.current?.value) {
      return alert("받는이를 입력해주세요.");
    } else if (!msgTextAreaRef.current?.value) {
      return alert("메시지 내용을 입력해주세요.");
    }
    setIsLoading(true);

    try {
      if (receiverInputRef.current.value == "everyone") {
        await axios
          .post(
            "http://localhost:8080/messages/all",
            {
              receiverName: "everyone",
              // everyone
              context: msgTextAreaRef.current.value,
              image: file,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) alert("메시지가 전송되었습니다.");
            setTotalLength(0);
            setSearchList([]);
            if (receiverInputRef.current) receiverInputRef.current.value = "";
            if (msgTextAreaRef.current) msgTextAreaRef.current.value = "";
            deleteImg();
            setMsgContent("");
          });
      } else {
        await axios
          .post(
            "http://localhost:8080/messages",
            {
              receiverName: receiverInputRef.current!.value,
              // everyone
              context: msgTextAreaRef.current.value,
              image: file,
            },
            {
              withCredentials: true,
              headers: {
                "Content-Type": "multipart/form-data",
                "Access-Control-Allow-Origin": "*",
              },
            }
          )
          .then((response) => {
            if (response.status === 200) alert("메시지가 전송되었습니다.");
            setTotalLength(0);
            setSearchList([]);
            if (receiverInputRef.current) receiverInputRef.current.value = "";
            if (msgTextAreaRef.current) msgTextAreaRef.current.value = "";
            deleteImg();
            setMsgContent("");
          });
      }
    } catch (error: any) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };

  const uploadImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      setFile(fileList[0]);
      e.target.value = "";
    }
  };

  const handleMsgContentChange = () => {
    if (msgTextAreaRef.current) {
      setCharCount(msgTextAreaRef.current.value.length);
      if (charCount > CLUB_MEMO_MAX_LENGTH) setCharCount(CLUB_MEMO_MAX_LENGTH);
      setMsgContent(msgTextAreaRef.current.value);
    }
  };

  useEffect(() => {
    msgContent ? setCharCount(msgContent.length) : setCharCount(0);
  }, [msgContent]);

  const deleteImg = () => {
    setFile(null);
  };

  return (
    <ContainerStyled>
      <UrlSectionStyled onClick={() => navigate("/thanks")}>
        덕담's 보러가기
      </UrlSectionStyled>
      <TitleStyled>덕담 보내기</TitleStyled>
      <FormWappingStyled>
        <FormContainerStyled>
          <FormSubTitleStyled>
            받는이(Intra ID)<span>*</span>
          </FormSubTitleStyled>
          <SearchBar
            searchInputRef={receiverInputRef}
            totalLength={totalLength}
            setTotalLength={setTotalLength}
            searchList={searchList}
            setSearchList={setSearchList}
          />
        </FormContainerStyled>
        <FormContainerStyled>
          <FormSubTitleStyled>
            메시지 내용<span>*</span>
          </FormSubTitleStyled>
          <FormTextareaStyled
            ref={msgTextAreaRef}
            onChange={handleMsgContentChange}
            maxLength={CLUB_MEMO_MAX_LENGTH}
          />
          <ContentItemWrapperStyledBottomStyled>
            {charCount <= CLUB_MEMO_MAX_LENGTH && (
              <LengthCountStyled>
                {charCount} / {CLUB_MEMO_MAX_LENGTH}
              </LengthCountStyled>
            )}
            {charCount > CLUB_MEMO_MAX_LENGTH && (
              <LengthCountStyled>
                {CLUB_MEMO_MAX_LENGTH} / {CLUB_MEMO_MAX_LENGTH}
              </LengthCountStyled>
            )}
          </ContentItemWrapperStyledBottomStyled>
        </FormContainerStyled>
        <FormContainerStyled>
          <FormSubTitleStyled>이미지</FormSubTitleStyled>
          <FileUploadFormStyled>
            <input
              type="file"
              accept="image/jpg, image/jpeg, image/png"
              ref={fileInputRef}
              id="fileInput"
              onChange={uploadImg}
            ></input>
            <FormButtonStyled
              disabled={isLoading}
              onClick={handleClickFileInput}
              type="button"
            >
              파일 선택
            </FormButtonStyled>
            {file && (
              <>
                <FileNameStyled>{file.name}</FileNameStyled>
                <ImgStyled onClick={() => deleteImg()}>
                  <img src={exitButtonIcon} alt="exit button icon" />
                </ImgStyled>
              </>
            )}
          </FileUploadFormStyled>
        </FormContainerStyled>
        <FormButtonContainerStyled>
          <FormButtonStyled
            $primary={true}
            onClick={handleSubmitButton}
            disabled={isLoading}
          >
            보내기
          </FormButtonStyled>
        </FormButtonContainerStyled>
      </FormWappingStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`;

export const TitleStyled = styled.div`
  text-align: center;
  font-size: 2rem;
  letter-spacing: -0.02rem;
  font-weight: 700;
  margin-bottom: 30px;
`;

const FormWappingStyled = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--ref-gray-100);
  border-radius: 10px;
  padding: 30px 20px;
  gap: 20px;
`;

const FormTextareaStyled = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  background-color: var(--ref-white);
  border-radius: 8px;
  border: 1px solid var(--ref-gray-200);
  resize: none;
  outline: none;
  :focus {
    border: 1px solid var(--sys-main-color);
  }
  text-align: left;
  padding: 10px;
  ::placeholder {
    color: var(--ref-gray-400);
  }
`;

const FormButtonContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const FormButtonStyled = styled.button<{ $primary?: boolean }>`
  width: auto;
  height: auto;
  padding: 10px 16px;
  font-size: 0.875rem;
  background-color: ${(props) =>
    props.$primary ? "var(--sys-main-color)" : "var(--ref-white)"};
  color: ${(props) =>
    props.$primary ? "var(--ref-white)" : "var(--ref-gray-900)"};
  font-weight: 700;
  border: 1px solid var(--ref-gray-200);
  border-radius: 4px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;

const FormContainerStyled = styled.div`
  width: 100%;
`;

const FormSubTitleStyled = styled.h3`
  font-size: 0.875rem;
  color: var(--ref-gray-500);
  margin-bottom: 10px;
  span {
    color: var(--ref-red-100);
  }
`;

const FileUploadFormStyled = styled.form`
  display: flex;
  align-items: center;

  & > #fileInput {
    display: none;
  }
`;

const FileNameStyled = styled.span`
  margin-left: 8px;
`;

export const UrlSectionStyled = styled.span`
  font-size: 14px;
  text-decoration: underline;
  color: var(--sys-main-color);
  margin: 4px 0 10px 0;
  height: 16px;
  line-height: 14px;
  text-align: right;
  width: 1040px;

  &:hover {
    cursor: pointer;
  }
`;

const ContentItemWrapperStyledBottomStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  height: 18px;
  line-height: 18px;
  margin-top: 4px;
`;

const LengthCountStyled = styled.span`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-size: 14px;
  text-align: end;
`;

const ImgStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 18px;
    height: 18px;
  }
`;

export default HomePage;
