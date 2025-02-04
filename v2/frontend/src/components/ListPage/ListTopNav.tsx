import { Link } from "react-router";
import styled from "styled-components";

const ListTopNav = () => {
  return (
    <>
      <LinkWrapperStyled>
        <Link to="/send">덕담 보내러 가기</Link>
      </LinkWrapperStyled>
    </>
  );
};

const LinkWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  color: var(--ref-purple-500);
  font-size: 0.875rem;
`;

export default ListTopNav;
