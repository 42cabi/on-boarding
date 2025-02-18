interface Message {
  id: number;
  senderName: string;
  receiverName: string;
  context: string;
  imageUrl: string;
  mine: boolean;
}

export default Message;
