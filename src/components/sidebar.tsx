import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
      <aside className="w-64 h-screen bg-gray-700 text-white p-6">
        <h2 className="text-xl font-bold text-center">Admin</h2>
        <nav className="flex flex-col my-2">
          <NavLink to="/dashboard" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Dashboard</NavLink>
          <NavLink to="/products" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Products</NavLink>
          <NavLink to="/orders" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Orders</NavLink>
          <NavLink to="/signout" className={({isActive}) => `my-1 p-2 rounded ${isActive ? "bg-gray-300 text-gray-700" : "hover:text-gray-200"}`}>Sign out</NavLink>
        </nav>
      </aside>
  );
}

export default Sidebar;
