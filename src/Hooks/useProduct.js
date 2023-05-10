import { useEffect, useState } from "react";

const useProduct = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    fetch("http://192.168.0.199:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};
export default useProduct;
