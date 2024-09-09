import styled from "styled-components";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const StyledMain = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const LadingPage = () => {
  return (
    <StyledMain>
      <LeftSection />
      <RightSection />
    </StyledMain>
  );
};

export default LadingPage;
