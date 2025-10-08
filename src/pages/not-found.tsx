import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/", { replace: true });
    }, 1000);

    return () => clearTimeout(timeout);

  }, [navigate]);

  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold m-2">404 - Page not found :(</h1>
      <p className="text-lg m-2">You are being redirected to the home page.</p>
    </section>
  );
}

export default NotFound;
