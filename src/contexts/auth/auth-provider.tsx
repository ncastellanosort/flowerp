import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import type { Company } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    const fetchCompany = async () => {
      if (!token) {
        setCompany(null);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch('http://localhost:3000/auth/me', {
          method: 'GET',
          headers: {
            auth_token: token,
          },
        })

        const data = await res.json();
        const { company } = data;
        setCompany(company as Company);
      } catch (error) {
         console.log(error);
         setCompany(null);
      } finally {
         setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  return (
    <AuthContext.Provider value={{ company, setCompany, loading }}>
    { children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
