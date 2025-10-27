import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/auth-context";
import { House, PackageSearch, ListChecks, Store, ChevronDown } from "lucide-react";

function Sidebar() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth_token");
    auth?.setToken(null);
    navigate("/login", { replace: true });
  }

  return (
    <aside className="w-64 h-screen border-r border-r-neutral-800 text-white p-4 flex flex-col justify-between">
      <div>
        <div className="ml-2 mb-4 font-bold flex flex-row items-center">
          <Store className="text-orange-400"/>
          <p className="ml-2 text-neutral-500 font-normal text-sm">Main</p>
        </div>
        <nav className="flex flex-col">
          <NavLink to="/dashboard" className={({isActive}) => `my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <House />
              <p className="pl-2">Dashboard</p>
            </div>
          </NavLink>
          <NavLink to="/products" className={({isActive}) => `my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <PackageSearch />
              <p className="pl-2">Products</p>
            </div>
          </NavLink>
          <NavLink to="/orders" className={({isActive}) => `my-1 py-1 px-2 rounded-md animation duration-150 ${isActive ? "bg-neutral-900 text-neutral-200" : "text-neutral-400"}`}>
            <div className="flex flex-row">
              <ListChecks />
              <p className="pl-2">Orders</p>
            </div>
          </NavLink>
        </nav>
      </div>

      <button
        onClick={handleLogOut}
        className="
          py-1
          px-3
          w-full
          my-1
          text-neutral-300
          font-bold
          rounded-md
          bg-neutral-900
          border border-neutral-800
          hover:bg-neutral-950
          hover:text-neutral-100
          hover:border
          hover:border-neutral-800
          transition
          duration-150
          cursor-pointer
          flex flex-row items-center
        "
      >
        <img
          src='https://www.dzoom.org.es/wp-content/uploads/2011/08/insp-cuadradas-1.jpg'
          className='rounded-full h-10 w-10 flex-shrink-0'
        />
        <div className='text-start p-2 overflow-hidden'>
          <p className='text-sm leading-tight truncate'>{auth?.company?.name}</p>
          <p className='text-[10px] font-normal break-words whitespace-normal leading-tight'>
            {auth?.company?.email}
          </p>
        </div>
          <ChevronDown />
      </button>
    </aside>
  );
}

export default Sidebar;
