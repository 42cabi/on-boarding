const PrivateRoute = (props: any) => {
  const { children } = props;
  // const location = useLocation();

  // auth fail
  // return <Navigate to="/" state={{ from: location }} replace />;

  return children;
};

export default PrivateRoute;
