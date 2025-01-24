import { useRef } from "react";
import styled from "styled-components";

const ImageUploader = ({
  setFile,
  file,
}: {
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
  file: File | null;
}) => {
  const FILE_SIZE_MAX_LIMIT = 30 * 1024 * 1024; // 30MB
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const inputFile = e.target.files?.[0];
    if (!inputFile) {
      return;
    }

    if (!inputFile.name.match(/\.(jpg|jpeg|png)$/)) {
      target.value = "";
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }

    if (inputFile.size > FILE_SIZE_MAX_LIMIT) {
      target.value = "";
      alert("이미지 파일은 30MB를 넘을 수 없습니다.");
      return;
    }

    setFile(inputFile);
  };

  const handleFileRemove = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <FileFormStyled>
      <FileInputStyled
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {file && (
        <DeleteButtonStyled id="deleteButton" onClick={handleFileRemove}>
          x
        </DeleteButtonStyled>
      )}
    </FileFormStyled>
  );
};

const FileFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 8px;
`;

const FileInputStyled = styled.input`
  font-size: 12px;
  &::file-selector-button {
    width: 70px;
    height: 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: white;
    cursor: pointer;
  }
`;

const DeleteButtonStyled = styled.button`
  width: 25px;
  height: 100%;
  padding-bottom: 3px;
  color: red;
  font-weight: bold;
  cursor: pointer;
`;

export default ImageUploader;
