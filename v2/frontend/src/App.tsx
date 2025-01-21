import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SendPage from "./pages/SendPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import { routes } from "./routes";

const route = createBrowserRouter(routes);

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/send" element={<SendPage />} />
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/register" element={<RegisterPage />} />
    //     <Route path="/list" element={<ListPage />} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={route} />
  );
}

export default App;
