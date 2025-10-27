import { useContext } from "react";
import { AuthContext } from "./auth-context";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const auth = useContext(AuthContext);

  if (auth?.loading || auth?.loading ) {
    return <div>loading user...</div>
  }

  if (!auth?.token) {
    return <Navigate to="/login" replace />
  }

  return children ? <>{ children }</> : <Outlet />
}

export default PrivateRoute;
