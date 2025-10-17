import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/auth-context";
import { useContext, useState } from "react";
import type { Company } from "../contexts/auth/types";

export function useLogin() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  async function login(userEmail: string, userPassword: string) {
    if (!userEmail || !userPassword) {
      alert("completar todos los campos");
      return;
    }

    const res = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          email: userEmail,
          password: userPassword
        }
      ),
    });

    const token = res.headers.get('auth_token');
    const data = await res.json();
    const { company } = data;

    if (token !== null) {
      auth?.setCompany(company as Company);
      localStorage.setItem("auth_token", token);
      navigate("/dashboard", { replace: true })
      return;
    }

    navigate("/login", { replace: true });
    setError("usuario invalido, revise sus credenciales");
    alert(error);
  }

  return { login, error }
}
