import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import Input from "../components/ui/input";

function Login() {
  return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white w-1/3 rounded p-4 shadow-md">
        <h2 className="text-gray-800 font-bold text-3xl p-4">Sign into yout account</h2>
        <div className="flex flex-col">
          <label className="text-gray-800 text-md px-4">Email</label>
          <Input placeholder="empresa@inc.com" />
          <label className="text-gray-800 text-md px-4">Password</label>
          <Input placeholder="••••••••" />
          <div className="m-4">
            <Link to="/dashboard">
              <Button>Sign in</Button>
            </Link>
          </div>
          <div className="flex flex-row">
          <label className="text-gray-800 text-md px-4 mb-2">Don’t have an account yet?
            <Link to="/signup" className="text-blue-500 font-bold hover:text-blue-900"> Sign up</Link>
          </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
