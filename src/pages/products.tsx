import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/auth/auth-context";
import type { Product } from "../types/product";


function Products() {
  const auth = useContext(AuthContext) 
  const [products, setProducts] = useState<Product[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth?.token) return;

    const fetchProducts = async (token: string | null | undefined) => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch('http://localhost:3000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });

        if (!res.ok) throw new Error('err fetching data');
        const data = await res.json() as Product[];
        setProducts(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts(auth?.token);
  }, [auth?.token]);

  if (loading) return <p>Loading...</p>
  if (error) return <p>error: {error}</p>

  return (
    <>
      {products?.map((product) => (
        <p>{product.name}</p>
      ))}
    </>
  );
}

export default Products;
