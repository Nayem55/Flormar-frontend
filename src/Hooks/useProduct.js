import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("https://fragrance-backend.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};
export default useProduct;
