import { Navigate } from "react-router-dom";
import { useUser } from "../store/userStore";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useUser((state) => state.token);

  if (!token) {
    return <Navigate to={"/auth"} />;
  }

  return children;
};

export default ProtectedRoute;
