import { styled } from "styled-components";
import Message from "../ListInterfaces";

interface MessageBoxProps {
  item: Message;
  setShowModal: (value: boolean) => void;
  setModalImgUrl: (value: string) => void;
}

const MessageBox = ({
  item: { senderName, receiverName, context, imageUrl },
  setShowModal,
  setModalImgUrl,
}: MessageBoxProps) => {
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
            <ContextStyled>{context}</ContextStyled>
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

export default MessageBox;
