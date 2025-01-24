import { styled } from "styled-components";

interface MessageBoxProps {
  senderName: string;
  receiverName: string;
  context: string;
  imageUrl: string;
}

const MessageBox = ({
  senderName,
  receiverName,
  context,
  imageUrl,
}: MessageBoxProps) => {
  return (
    <>
      <ImgStyled src={imageUrl} alt="failed" />
      <div>
        from {senderName} to {receiverName}
      </div>
      <div>{context}</div>
    </>
  );
};

const ImgStyled = styled.img`
  width: 100px;
  height: 100px;
`;

export default MessageBox;
