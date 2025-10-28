import { Link } from "react-router-dom";
import Input from "../components/ui/input";
import { useState } from "react";
import { useLogin } from "../hooks/use-login";
import { Building2 } from "lucide-react";
import type { Login } from "../types/login";

function Login() {
  const [formData, setFormData] = useState<Login>(
    {
      email: "",
      password: ""
    }
  );
  const { login } = useLogin();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(formData.email, formData.password)
  }

   return (
    <section className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] p-4">
        <Building2 className="text-orange-500 mx-auto mb-2"/>
        <h4 className="text-neutral-100 font-bold pt-2 text-center">
        FlowERP
        </h4>
        <h2 className="text-neutral-100 text-center font-bold text-3xl p-4">
          Log in to your Business
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
          />

          <div className="m-4">
          <button className="
               py-3 px-8 
               w-full
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
                Sign in
            </button>
          </div>

          <div className="flex flex-row justify-center">
            <label className="text-neutral-100 text-md px-4 py-2">
              Don’t have an account?
              <Link
                to="/signup"
                className="text-center text-blue-500 hover:underline"
              >
                {" "}
              Sign up
              </Link>
            </label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
