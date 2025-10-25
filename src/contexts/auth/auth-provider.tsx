import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import type { Company } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userToken, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    const fetchCompany = async () => {
      if (!token) {
        setCompany(null);
        setToken(null);
        setLoading(false);
        return;
      }
      
      setToken(token);

      try {
        const res = await fetch('http://localhost:3000/auth/me', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (!res.ok) throw new Error('invalid or expired token');

        const data = await res.json();
        const { company } = data;
        setCompany(company as Company);
      } catch (error) {
         console.log(error);
         setCompany(null);
         setToken(null);
         localStorage.removeItem('auth_token');
      } finally {
         setLoading(false);
      }
    };

    fetchCompany();
  }, []);

  useEffect(() => {
    if (userToken) {
      localStorage.setItem('auth_token', userToken);
    } else {
      localStorage.removeItem('auth_token');
    }
  }, [userToken]);

  return (
    <AuthContext.Provider value={{ company, setCompany, loading, token: userToken, setToken }}>
    { children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
