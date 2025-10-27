import { useNavigate } from "react-router-dom";
import type { SignUp } from "../types/signup";

export function useRegister() {
  const navigate = useNavigate();

  async function register(companyData: SignUp) {
    if (!companyData) {
      console.log('missing company data');
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            taxId: companyData.taxId,
            name: companyData.name,
            address: companyData.address,
            contact: companyData.contact,
            email: companyData.email,
            password: companyData.password,
          }
        ),
      });

      if (!res.ok) {
        alert('error in company register');
        throw new Error('error in company register'); 
      }

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(`register failed ${error}`);
      alert(`register failed ${error}`);
    }
  }

  return { register }
}
