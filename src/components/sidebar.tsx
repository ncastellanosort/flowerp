import { Link } from "react-router-dom";

function Sidebar() {
  return (
      <aside className="w-64 h-screen bg-gray-700 text-white p-6">
        <h2 className="text-xl font-bold">Admin</h2>
        <nav className="flex flex-col my-2">
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/products" className="hover:text-gray-200">Products</Link>
          <Link to="/orders" className="hover:text-gray-200">Orders</Link>
        </nav>
      </aside>
  );
}

export default Sidebar;
