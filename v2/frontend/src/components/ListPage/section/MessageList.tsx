import { useState } from "react";
import styled from "styled-components";
import Message from "../ListInterfaces";
import MessageBox from "./MessageBox";

interface MessageListProps {
  items: Message[];
  isLoading: boolean;
}

const MessageList = ({ items, isLoading }: MessageListProps) => {
  const [showModal, setShowModal] = useState(false);
  const [modalImgUrl, setModalImgUrl] = useState("");

  if (items.length === 0 && !isLoading) {
    return <EmptyState>메시지가 없습니다</EmptyState>;
  }

  return (
    <>
      <MessageBoxStyled>
        {items.map((item) => (
          <MessageBox
            key={`message_box_${item.messageId}`}
            senderName={item.senderName}
            receiverName={item.receiverName}
            context={item.context}
            imageUrl={item.imageUrl}
            setShowModal={setShowModal}
            setModalImgUrl={setModalImgUrl}
          />
        ))}
      </MessageBoxStyled>

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalImage
            src={modalImgUrl}
            alt="확대된 이미지"
            onClick={(e) => e.stopPropagation()}
          />
        </ModalOverlay>
      )}
    </>
  );
};

const MessageBoxStyled = styled.div`
  margin-top: 32px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalImage = styled.img`
  max-width: fit-content;
  max-height: 90%;
  border-radius: 8px;
  object-fit: contain;
`;

export default MessageList;
