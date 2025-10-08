import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  return(
    <div>
      <Sidebar />
      <main className="p-10 bg-gray-300">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
