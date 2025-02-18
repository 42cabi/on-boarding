import styled from "styled-components";

const ListHeader = () => {
  return (
    <>
      <TitleContainerStyled>덕담 보기</TitleContainerStyled>
    </>
  );
};

export default ListHeader;

const TitleContainerStyled = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--service-man-title-border-btm-color);
  margin-bottom: 70px;
  font-weight: 700;
  font-size: 1.25rem;
  letter-spacing: -0.02rem;
  margin-bottom: 20px;
`;
