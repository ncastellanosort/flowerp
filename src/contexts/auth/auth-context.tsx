import { createContext } from "react";
import type { AuthContextType } from "./types";

export const AuthContext = createContext<AuthContextType | null>({
  company: null,
  setCompany: () => {},
  loading: true
});
