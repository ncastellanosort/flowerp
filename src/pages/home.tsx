import { Link } from "react-router-dom";
import { Store } from "lucide-react";

function Home() {
  return (
    <>
    <nav className="fixed top-0 w-full h-16 border-b border-neutral-800 flex justify-center">
      <div className="max-w-screen-xl w-full flex items-center justify-between px-14">
        <div className="flex items-center gap-2">
          <Store className="text-orange-500" />
          <p className="text-neutral-100 text-2xl font-bold">Shop Manager</p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/login" className="cursor-pointer font-medium py-1 px-4 text-neutral-100 rounded-md bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 transition duration-150">
            Login
          </Link>
          <Link to="/signup" className="cursor-pointer font-medium py-1 px-4 text-neutral-900 rounded-md bg-orange-500 border border-orange-600 hover:bg-neutral-950 hover:text-neutral-100 hover:border hover:border-neutral-800 transition duration-150">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>

    <section className="w-full h-screen flex items-center justify-center">
      <div className="py-8 px-4 max-w-screen-lg text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-neutral-100 md:text-5xl lg:text-6xl">
          El poder de tu eCommerce
          </h1>
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-orange-500 md:text-5xl lg:text-6xl">Simplificado</h2>
          <p className="mb-8 text-lg font-normal text-neutral-100 lg:text-xl sm:px-16 lg:px-48">
          Tu centro de control para e-commerce: gestiona productos, pedidos y clientes con una interfaz simple, eficiente y moderna.
          </p>
          <div className="w-full flex flex-row justify-center items-center">
            <Link to="/signup" className="mr-4">
                <button className="
               py-3 px-8 w-full
               text-neutral-900
               font-bold
               rounded-md
               bg-orange-500
               border border-orange-600
               hover:bg-neutral-950
               hover:text-neutral-100
               hover:border
               hover:border-neutral-800
               animation
               duration-150
               cursor-pointer
                ">
                Empieza tu gestión
                </button>
            </Link>
          </div>
      </div>
    </section>
    </>
  );
}

export default Home;
