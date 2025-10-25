import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "./ui/button";
import { AuthContext } from "../contexts/auth/auth-context";
import { House, PackageSearch, ListChecks } from "lucide-react";

function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth_token");
    auth?.setCompany(null);
    navigate("/login", { replace: true });
  }

  return (
    <aside className="w-52 h-screen bg-gray-700 text-white p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4">Main</h2>
        <nav className="flex flex-col">
          <NavLink to="/dashboard" className={({isActive}) => `my-1 py-1 px-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>
            <div className="flex flex-row">
              <House />
              <p className="pl-2">Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/products" className={({isActive}) => `my-1 py-1 px-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>
            <div className="flex flex-row">
              <PackageSearch />
              <p className="pl-2">Products</p>
            </div>
          </NavLink>
          <NavLink to="/orders" className={({isActive}) => `my-1 py-1 px-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>
            <div className="flex flex-row">
              <ListChecks />
              <p className="pl-2">Orders</p>
            </div>
          </NavLink>
        </nav>
      </div>

      <Button className="w-full my-1 p-2 rounded" onClick={handleLogOut}>
      Sign out
      </Button>
    </aside>
  );
}

export default Sidebar;
