import Input from "../components/ui/input";
import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { Store } from "lucide-react";

function Signup() {
    return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] p-4">
        <Store className="text-white mx-auto mb-2"/>
        <h4 className="text-neutral-100 font-bold pt-2 text-center">
          Shop Manager
        </h4>
        <h2 className="text-neutral-100 text-center font-bold text-3xl p-4">Create an account</h2>
        <div className="flex flex-col">
          <Input placeholder="Email Address" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <div className="m-4">
            <Link to="/login">
              <Button>Create an account</Button>
            </Link>
          </div>
          <div className="flex flex-row justify-center">
            <label className="text-neutral-100 text-md px-4 py-2">Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline"> Login here</Link>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
