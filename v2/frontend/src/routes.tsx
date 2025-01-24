import SendPage from "./pages/SendPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import { ReactElement } from "react";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

enum AccessType {
  PUBLIC,
  PRIVATE,
}

export interface RouteInfo {
  path: string;
  accessType: AccessType;
  element: ReactElement;
}

const routesInfo: RouteInfo[] = [
  {
    path: "/",
    accessType: AccessType.PRIVATE,
    element: <ListPage />,
  },
  {
    path: "/login",
    accessType: AccessType.PUBLIC,
    element: <LoginPage />,
  },
  {
    path: "/register",
    accessType: AccessType.PUBLIC,
    element: <RegisterPage />,
  },
  {
    path: "/send",
    accessType: AccessType.PRIVATE,
    element: <SendPage />,
  },
];

const injectProtectedRoute = (routesInfo: RouteInfo[]) => {
  return routesInfo.map((route: RouteInfo) => {
    if (route.accessType === AccessType.PRIVATE) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    return route;
  });
};

export const routes = injectProtectedRoute(routesInfo);
