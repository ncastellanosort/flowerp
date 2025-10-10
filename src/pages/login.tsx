import { Link, useNavigate } from "react-router-dom";
import Button from "../components/ui/button";
import Input from "../components/ui/input";
import { useState, useContext } from "react";
import { AuthContext } from "../contexts/auth/auth-context";
import type { UserData } from "../contexts/auth/types";

type Login = {
  email: string,
  password: string
}

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState<Login>(
    {
      email: "",
      password: ""
    }
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("completar todos los campos");
      return;
    }

    // llamar a api para ver si usuario esta activo
    const validUser: UserData = {
      email: "nico@gmail.com",
      token: "abc"
    }

    if (validUser.email === "nico@gmail.com") {
      setUser(validUser);
      localStorage.setItem("auth-token", validUser.token);
      navigate("/dashboard", { replace: true })
      setFormData({email: formData.email, password: formData.email});
    }

    navigate("/login", { replace: true });
    alert("usuario invalido, revise sus credenciales")
  }

   return (
    <section className="w-full h-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white w-1/3 rounded p-4 shadow-md">
        <h2 className="text-gray-800 font-bold text-3xl p-4">
          Sign into your account
        </h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="text-gray-800 text-md px-4">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            placeholder="empresa@inc.com"
            onChange={handleChange}
          />

          <label className="text-gray-800 text-md px-4">Password</label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            placeholder="••••••••"
            onChange={handleChange}
          />

          <div className="m-4">
            <Button type="submit">Sign in</Button>
          </div>

          <div className="flex flex-row">
            <label className="text-gray-800 text-md px-4 mb-2">
              Don’t have an account yet?
              <Link
                to="/signup"
                className="text-blue-500 font-bold hover:text-blue-900"
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
