import { styled } from "styled-components";

interface MessageBoxProps {
  senderName: string;
  receiverName: string;
  context: string;
  imageUrl: string;
  setShowModal: (value: boolean) => void;
  setModalImgUrl: (value: string) => void;
}

const MessageBox = ({
  senderName,
  receiverName,
  context,
  imageUrl,
  setShowModal,
  setModalImgUrl,
}: MessageBoxProps) => {
  return (
    <>
      <MessageBoxStyled>
        <ImgStyled
          src={imageUrl}
          alt="failed"
          onClick={() => {
            setShowModal(true);
            setModalImgUrl(imageUrl);
          }}
        />
        <div>
          <SenderReceiverStyled>
            from {senderName} to {receiverName}
          </SenderReceiverStyled>
          <ContextStyled>{context}</ContextStyled>
        </div>
      </MessageBoxStyled>
    </>
  );
};

const MessageBoxStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 28px;
  margin-bottom: 1rem;
`;

const ImgStyled = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 20px;
`;

const SenderReceiverStyled = styled.div`
  width: 100%;
  color: #666666;
  font-size: 14px;
`;

const ContextStyled = styled.div`
  width: 100%;
  font-size: 20px;
  font-weight: 700;
  padding-top: 8px;
  padding-bottom: 24px;
`;

export default MessageBox;
