import { useState } from "react";
import styled from "styled-components";
import Message from "../ListInterfaces";
import MessageBox from "./MessageBox";
import MessageBoxEditable from "./MessageBoxEditable";
import { ReactComponent as CloseIcon } from "../../../assets/images/close-icon.svg";

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
        {items.map((item) =>
          item.mine ? (
            <MessageBoxEditable
              key={`message_box_${item.id}`}
              item={item}
              setShowModal={setShowModal}
              setModalImgUrl={setModalImgUrl}
            />
          ) : (
            <MessageBox
              key={`message_box_${item.id}`}
              item={item}
              setShowModal={setShowModal}
              setModalImgUrl={setModalImgUrl}
            />
          )
        )}
      </MessageBoxStyled>

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <ModalImage
            src={modalImgUrl}
            alt="확대된 이미지"
            onClick={(e) => e.stopPropagation()}
          />
          <CloseButton onClick={() => setShowModal(false)}>
            <CloseIcon />
          </CloseButton>
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
  color: var(--ref-gray-600);
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--ref-black);
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default MessageList;
