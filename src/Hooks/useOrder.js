import { useEffect, useState } from "react";

const useOrder = () => {
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    fetch("https://fragrance-backend.vercel.app/order")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  return [orderList,setOrderList];
};
export default useOrder;
