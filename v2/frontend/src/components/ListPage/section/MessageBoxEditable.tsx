import { useState } from "react";
import styled from "styled-components";
import { updateMessage } from "../../../api/messages";
import Message from "../ListInterfaces";

interface MessageBoxProps {
  item: Message;
  setShowModal: (value: boolean) => void;
  setModalImgUrl: (value: string) => void;
}

const MessageBoxEditable = ({
  item: { id: messageId, senderName, receiverName, context, imageUrl },
  setShowModal,
  setModalImgUrl,
}: MessageBoxProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(context);
  const [contextValue, setContextValue] = useState(context);

  const handleEdit = async () => {
    if (isEditing) {
      if (inputValue !== context) {
        try {
          const res = await updateMessage(messageId, { context: inputValue });
          if (res.status === 200) {
            setContextValue(inputValue);
          }
        } catch (error) {
          console.error("Failed to update message:", error);
          setInputValue(contextValue);
          return;
        }
      }
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancel = () => {
    setInputValue(contextValue);
    setIsEditing(false);
  };

  return (
    <>
      <MessageBoxStyled>
        <ImgStyled
          src={imageUrl}
          alt="축소된 이미지"
          $hasUrl={imageUrl !== ""}
          onClick={() => {
            if (imageUrl === "") return;
            setShowModal(true);
            setModalImgUrl(imageUrl);
          }}
        />
        <TextStyled>
          <SenderReceiverStyled>
            from {senderName} to {receiverName}
          </SenderReceiverStyled>
          <ContextWrapperStyled>
            {isEditing ? (
              <InputStyled
                type="text"
                value={inputValue}
                onChange={handleChange}
              />
            ) : (
              <ContextStyled>{contextValue}</ContextStyled>
            )}
            <ButtonGroupStyled>
              <ButtonStyled onClick={handleEdit}>
                {isEditing ? "완료" : "수정"}
              </ButtonStyled>
              {isEditing && (
                <ButtonStyled onClick={handleCancel}>취소</ButtonStyled>
              )}
            </ButtonGroupStyled>
          </ContextWrapperStyled>
        </TextStyled>
      </MessageBoxStyled>
    </>
  );
};

const MessageBoxStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid var(--ref-gray-300);
  border-radius: 28px;
  margin-bottom: 1rem;
`;

const ImgStyled = styled.img<{ $hasUrl: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 10px 30px 10px 10px;
  ${(props) => props.$hasUrl && "cursor: pointer;"}
`;

const TextStyled = styled.div`
  flex-grow: 1;
`;

const SenderReceiverStyled = styled.div`
  width: 100%;
  color: var(--ref-gray-500);
  font-size: 14px;
`;

const ContextWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContextStyled = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-top: 4px;
`;

const InputStyled = styled.input`
  font-size: 20px;
  font-weight: 700;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  margin-right: 10px;
  text-align: left;
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  gap: 8px;
`;

const ButtonStyled = styled.button`
  background-color: #f0f0f0;
  width: 60px;
  height: 36px;
  border: none;
  border-radius: 10px;
  padding: 6px 12px;
  font-size: 14px;
  color: #666666;
`;

export default MessageBoxEditable;
