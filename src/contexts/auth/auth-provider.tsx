import { useState, useEffect } from "react";
import { AuthContext } from "./auth-context";
import type { Company } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [company, setCompany] = useState<Company | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [userToken, setToken] = useState<string | null>(null);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");

    const fetchCompany = async () => {
      if (!token) {
        setCompany(null);
        setToken(null);
        setLoading(false);
        setInitialized(true);
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

        if (!res.ok) throw new Error('err fetching auth/me');

        const data = await res.json();
        const { company } = data;
        setCompany(company as Company);
      } catch (error) {
         setCompany(null);
         setToken(null);
         throw new Error(`error ${error}`);
      } finally {
         setLoading(false);
         setInitialized(true);
      }
    };

    fetchCompany();
  }, []);

  useEffect(() => {
    if (!initialized) return;

    if (userToken) {
      localStorage.setItem('auth_token', userToken);
    } else {
      localStorage.removeItem('auth_token');
    }
  }, [userToken, initialized]);

  return (
    <AuthContext.Provider value={{ company, setCompany, loading, token: userToken, setToken }}>
    { children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
