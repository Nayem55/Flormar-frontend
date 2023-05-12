import { useEffect, useState } from "react";

const useOrder = () => {
  const [orderList, setOrderList] = useState();
  useEffect(() => {
    fetch("http://192.168.0.200:5000/order")
      .then((res) => res.json())
      .then((data) => setOrderList(data));
  }, []);

  return [orderList];
};
export default useOrder;
