import { ReactElement, useEffect, useState } from "react";
import { checkAuth } from "../api/users";
import { Navigate, useLocation } from "react-router";

const PublicRoute = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    // auth check - call "/user/auth" API with token
    const checkAuthStatus = async () => {
      try {
        const res = await checkAuth();
        setIsAuthenticated(res.status === 200);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default PublicRoute;
