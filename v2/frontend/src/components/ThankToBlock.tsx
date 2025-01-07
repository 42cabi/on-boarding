import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import editIcon from "../svg/edit.svg";
import modifyIcon from "../svg/pen-add.svg";
import CenceledIcon from "../svg/close-circle.svg";
import axios from "axios";
import { CLUB_MEMO_MAX_LENGTH } from "../HomePage";
import defaultImg from "../svg/default.png";

export interface IItemUsageLog {
  id: string;
  senderName: string;
  receiverName: string;
  context: string;
  imageUrl: string;
  mine?: boolean;
}

const ThankToBlock = ({ info }: { info: IItemUsageLog }) => {
  const [isImageModal, setIsImageModal] = useState<boolean>(false);
  const [modifyContent, setModifyContent] = useState<string>("");
  const [isModify, setIsModify] = useState<boolean>(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const isButtonClickedRef = useRef<boolean>(false);
  const [charCount, setCharCount] = useState<number>(0);
  const [content, setContent] = useState<string>("");

  // 처음 context
  useEffect(() => {
    setContent(info.context);
  }, []);

  const handleEditButtonClick = async () => {
    if (modifyContent.trim().length < 1) {
      alert("최소 1글자 이상 입력해주세요.");
      return;
    }
    if (modifyContent.length > 42) {
      alert("최대 42글자까지 입력 가능합니다.");
      return;
    }
    try {
      const res = await axios
        .patch(
          `http://localhost:8080/messages/${info.id}`,
          {
            context: modifyContent,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          setContent(modifyContent);
        });
      setIsModify(!isModify);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  // onBlur 처리
  const handleOnBlur = () => {
    if (isButtonClickedRef.current) {
      isButtonClickedRef.current = false;
      return;
    }
    setIsModify(false);
    setModifyContent("");
  };

  // 이미지 모달 버튼
  const handleImageModalClick = () => {
    setIsImageModal(!isImageModal);
  };

  // 수정 누르고 다른 곳 포커스 하면 수정모드 해제
  const handleEditClick = () => {
    setIsModify(!isModify);
  };

  // 수정모드에선 input으로 focus
  useEffect(() => {
    if (isModify) {
      inputRef.current?.focus();
    }
  }, [isModify]);

  const handleMsgContentChange = () => {
    if (inputRef.current) {
      setCharCount(inputRef.current.value.length);
      if (charCount > CLUB_MEMO_MAX_LENGTH) setCharCount(CLUB_MEMO_MAX_LENGTH);
      setModifyContent(inputRef.current.value);
    }
  };

  return (
    <>
      <WrapperStyled>
        <IconBlockStyled
          $itemName={info.imageUrl || "defaultImg"} // null 또는 undefined일 때 defaultImg 사용
          onClick={handleImageModalClick}
        >
          <img src={info.imageUrl || defaultImg} alt="Image Description" />
        </IconBlockStyled>

        <InfoStyled>
          <ItemUsageInfoStyled>
            <ItemDacontentyled>{info.senderName}</ItemDacontentyled>
            {isModify ? (
              <ContentLengthStyled>
                <ModifyContentStyled
                  rows={1}
                  ref={inputRef}
                  placeholder={info.context}
                  value={modifyContent}
                  onChange={handleMsgContentChange}
                  onBlur={handleOnBlur}
                  maxLength={42}
                />
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
              </ContentLengthStyled>
            ) : (
              <ItemTitleStyled>{content}</ItemTitleStyled>
            )}
          </ItemUsageInfoStyled>
          <ImageStyled>
            {info.mine &&
              (isModify ? (
                // 수정하고 전송버튼
                <img
                  src={modifyIcon}
                  alt="modify"
                  onClick={() => handleEditButtonClick()}
                  onMouseDown={() => {
                    isButtonClickedRef.current = true;
                  }}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <img
                  src={editIcon}
                  alt="edit"
                  onClick={() => handleEditClick()}
                  style={{ cursor: "pointer" }}
                />
              ))}
          </ImageStyled>
        </InfoStyled>
      </WrapperStyled>

      {isImageModal && (
        <ModalOverlay onClick={() => handleImageModalClick()}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ImageStyled>
              <img
                src={CenceledIcon}
                alt="Cancel"
                onClick={() => handleImageModalClick()}
              />
            </ImageStyled>
            <img src={info.imageUrl || defaultImg} alt="Image Description" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

const ContentLengthStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  height: 18px;
  line-height: 18px;
  margin-top: 4px;
`;

const WrapperStyled = styled.div`
  margin-top: 10px;
  padding: 0 30px;
  border-radius: 20px;
  height: 90px;
  border: 1px solid var(--ref-gray-300);
  display: flex;
  align-items: center;

  &:hover {
    border: 1px solid var(--sys-main-color);
  }
`;

const IconBlockStyled = styled.div<{ $itemName: string }>`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: var(--sys-main-color);
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
    transform-origin: center;

    &:hover {
      transform: scale(1.1);
      transition: transform 0.3s;
    }
  }

  & > img > * {
    transform: scale(1.25);
    stroke: var(--white-text-with-bg-color);
    stroke-width: "1.5px";
  }
`;

const ItemUsageInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  width: 95%;
`;

const ItemDacontentyled = styled.div`
  font-size: 16px;
  word-spacing: -2px;
  color: var(--gray-line-btn-color);
`;

const InfoStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemTitleStyled = styled.div`
  font-size: 16px;
  font-weight: 800;
`;

const ModifyContentStyled = styled.textarea`
  font-size: 16px;
  font-weight: 800;
  border: none;
  border-bottom: 1px solid var(--ref-gray-300);
  width: 100%;
  text-align: left;
  outline: none;
  resize: none;
  overflow: hidden;

  &:focus {
    resize: none;
    box-shadow: none;
    border-bottom: 1px solid var(--sys-main-color);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  max-width: 75%;
  position: relative;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  & > div {
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
  }
`;

const ImageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 18px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
  }
`;

const LengthCountStyled = styled.span`
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  font-size: 14px;
  text-align: end;
  position: absolute;
`;

export default ThankToBlock;
