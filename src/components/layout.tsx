import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

function Layout() {
  return(
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
