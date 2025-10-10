import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const user = useContext(AuthContext);

  if (!user) {
    <Navigate to="/login" replace />
  }

  return <>{ children }</>
}

export default PrivateRoute;
