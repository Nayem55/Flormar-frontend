import Product from "../Shared/Product";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";
import './NewArrival.css'

const NewArrivals = () => {
  const { products } = useContext(ThemeContext);
  const newArrivals = products
    ?.filter((product) => product.categories[0].name.toLowerCase() === "armaf")
    .slice(29, 37);

  return (
    <div className="new-arrivals">
      <h1 className="text-center text-xl font-bold mb-[50px]">NEW ARRIVALS</h1>
      <div className="grid grid-cols-2 sm:gap-6 sm:grid-cols-4">
        {newArrivals?.map((product) => (
          <Product product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
