import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./ui/button";
import { AuthContext } from "../contexts/auth/auth-context";

function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth-token");
    localStorage.removeItem("email-token");
    auth?.setUser(null);
    navigate("/login", { replace: true });
  }

  return (
      <aside className="w-64 h-screen bg-gray-700 text-white p-6">
        <h2 className="text-xl font-bold text-center">Admin</h2>
        <nav className="flex flex-col my-2">
          <NavLink to="/dashboard" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Dashboard</NavLink>
          <NavLink to="/products" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Products</NavLink>
          <NavLink to="/orders" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Orders</NavLink>
          <Button className="my-1 p-2 rounded" onClick={handleLogOut}>Sign out</Button>
        </nav>
      </aside>
  );
}

export default Sidebar;
