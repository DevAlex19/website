import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: any) {
  const authToken = localStorage.getItem("Auth Token");

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default PrivateRoute;
