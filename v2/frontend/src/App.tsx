import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import SendPage from "./pages/SendPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
