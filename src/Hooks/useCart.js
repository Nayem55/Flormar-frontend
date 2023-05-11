import { useEffect, useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState();
  useEffect(() => {
    fetch("http://192.168.0.200:5000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  return [cart, setCart];
};
export default useCart;