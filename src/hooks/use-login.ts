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

    const data = await res.json();
    const { company, token } = data;

    if (token) {
      auth?.setCompany(company as Company);
      auth?.setToken(token);
      localStorage.setItem("auth_token", token as string);
      navigate("/dashboard", { replace: true })
      return;
    }

    alert(error);
    navigate("/login", { replace: true });
    setError("usuario invalido, revise sus credenciales");
  }

  return { login, error }
}
