import Input from "../components/ui/input";
import { Link } from "react-router-dom";
import Button from "../components/ui/button";

function Signup() {
    return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white w-[400px] rounded p-4 shadow-md">
        <h4 className="text-gray-800 font-bold pt-2 text-center">
          Shop Manager
        </h4>
        <h2 className="text-gray-800 font-bold text-3xl p-4">Create an account</h2>
        <div className="flex flex-col">
          <label className="text-gray-800 text-md px-4">Your email</label>
          <Input placeholder="empresa@inc.com" />
          <label className="text-gray-800 text-md px-4">Password</label>
          <Input placeholder="••••••••" />
          <label className="text-gray-800 text-md px-4">Confirm password</label>
          <Input placeholder="••••••••" />
          <div className="m-4">
            <Link to="/login">
              <Button>Create an account</Button>
            </Link>
          </div>
          <div className="flex flex-row">
          <label className="text-gray-800 text-md px-4 mb-2">Already have an account?
            <Link to="/login" className="text-blue-500 font-bold hover:text-blue-900"> Login here</Link>
          </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
