import ListTopNav from "../components/ListPage/ListTopNav";
import ListHeader from "../components/ListPage/ListHeader";
import ListSection from "../components/ListPage/ListSection";
import styled from "styled-components";

const ListPage = () => {
  return (
    <WrapperStyled>
      <NavStyled>
        <ListTopNav />
      </NavStyled>

      <header>
        <ListHeader />
      </header>

      <section>
        <ListSection />
      </section>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
  overflow: scroll;

  & > * {
    width: 80%;
    max-width: 1000px;
  }
`;

const NavStyled = styled.nav`
  width: 80%;
`;

export default ListPage;
