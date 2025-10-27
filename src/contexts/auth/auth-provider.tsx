import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import type { Company } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [userToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    async function initAuth() {
      const token = localStorage.getItem("auth_token");

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const res = await fetch("http://localhost:3000/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) throw new Error("invalid or expired token");
        const data = await res.json();

        setCompany(data.company as Company);
        setToken(token);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("auth_token");
        setCompany(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    }

    initAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ company, setCompany, loading, token: userToken, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

