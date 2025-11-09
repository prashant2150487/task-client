import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("authToken");
  console.log(isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace={true} />;
  }
  return <>{children}</>;
};

export default ProtectedRoutes;
