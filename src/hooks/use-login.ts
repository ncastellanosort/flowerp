import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/auth/auth-context";
import type { UserData } from "../contexts/auth/types";
import { useContext, useState } from "react";

export function useLogin() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  function login(email: string, password: string) {
    if (!email || !password) {
      alert("completar todos los campos");
      return;
    }

    // llamar a api para ver si usuario esta activo
    const validUser: UserData = {
      email: "nico@gmail.com",
      token: "abc"
    }

    if (email === validUser.email) {
      auth?.setUser(validUser);
      localStorage.setItem("auth-token", validUser.token);
      localStorage.setItem("email-token", validUser.email);
      navigate("/dashboard", { replace: true })
      return;
    }

    navigate("/login", { replace: true });
    setError("usuario invalido, revise sus credenciales");
    alert(error);
  }

  return { login, error }
}
