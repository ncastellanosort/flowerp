import { Link } from "react-router-dom";
import Button from "../components/ui/button";

function Home() {
  return (
    <section className="bg-white w-full h-screen flex items-center justify-center">
      <div className="py-8 px-4 max-w-screen-xl text-center">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
              Shop Manager
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48">
          Tu centro de control para e-commerce: gestiona productos, pedidos y clientes con una interfaz simple, eficiente y moderna.
          </p>
          <div className="flex flex-row w-24 justify-center items-center m-auto">
            <Link to="/signup" className="mr-4">
                <Button className="border border-blue-500">
                Start
                </Button>
            </Link>
            <Link to="/login" className="ml-4">
              <button className="border border-gray-200 rounded py-3 px-8 w-full hover:bg-gray-300">Login</button>
            </Link>
          </div>
      </div>
    </section>
  );
}

export default Home;
