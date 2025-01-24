import styled from "styled-components";
import MessageBox from "./MessageBox";
import Message from "./ListInterfaces";

interface MessageListProps {
  items: Message[];
  isLoading: boolean;
}

const MessageList = ({ items, isLoading }: MessageListProps) => {
  if (items.length === 0 && !isLoading) {
    return <EmptyState>메시지가 없습니다</EmptyState>;
  }

  return (
    <div>
      {items.map((item) => (
        <MessageBox
          key={`message_box_${item.messageId}`}
          senderName={item.senderName}
          receiverName={item.receiverName}
          context={item.context}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
`;

export default MessageList;
