import { useState } from "react";
import { AuthContext } from "./auth-context";
import type { UserData } from "./types";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
    { children }
    </AuthContext.Provider>
  );

}

export default AuthProvider;
