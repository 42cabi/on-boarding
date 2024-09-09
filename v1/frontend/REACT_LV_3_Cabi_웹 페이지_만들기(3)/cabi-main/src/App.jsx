import styled from "styled-components";
import MainPage from "./pages/Main";

const StyledRoot = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <StyledRoot>
      <MainPage />
    </StyledRoot>
  );
}

export default App;
