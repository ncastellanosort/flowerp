import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import type { UserData } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // para que si encuentra el token, cargue el usuario
  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    const email = localStorage.getItem("email-token");

    if (token && email) {
      setUser({ email: email, token: token });
    }

    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, loading}}>
    { children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
