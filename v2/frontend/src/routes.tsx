import SendPage from "./pages/SendPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ListPage from "./pages/ListPage";
import { ReactNode } from "react";
import PrivateRouteWrapper from "./components/PrivateRoute";

enum AccessType {
  PUBLIC,
  PRIVATE,
}

export interface RouteInfo {
  path: string;
  accessType: AccessType;
  element: ReactNode;
}

const routesInfo: RouteInfo[] = [
  {
    path: "/",
    accessType: AccessType.PUBLIC,
    element: <LoginPage />,
  },
  {
    path: "list",
    accessType: AccessType.PUBLIC, // PRIVATE
    element: <ListPage />,
  },
  {
    path: "register",
    accessType: AccessType.PUBLIC, // PRIVATE
    element: <RegisterPage />,
  },
  {
    path: "send",
    accessType: AccessType.PUBLIC, // PRIVATE
    element: <SendPage />,
  },
];

const injectProtectedRoute = (routesInfo: RouteInfo[]) => {
  return routesInfo.map((route: RouteInfo) => {
    if (route.accessType === AccessType.PRIVATE) {
      route.element = (
        <PrivateRouteWrapper>{route.element}</PrivateRouteWrapper>
      );
    }

    return route;
  });
};

export const routes = injectProtectedRoute(routesInfo);
