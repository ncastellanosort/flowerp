import { Link } from "react-router-dom";
import Button from "../components/ui/button";

function Home() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold m-2">Ecommerce Admin Panel</h1>
      <p className="text-lg m-2">Aca podras gestionar todo tu ecommerce</p>
      <div className="m-4">
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </section>

  );
}

export default Home;
