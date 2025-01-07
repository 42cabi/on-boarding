import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import ThanksPage from "./ThanksPage";
import "./index.css";
import JoinPage from "./JoinPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
