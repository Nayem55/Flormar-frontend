import "./App.css";
import { ThemeContext } from "./Contexts/ThemeContext";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes";
import useProduct from "./Hooks/useProduct";
import { useEffect, useState } from "react";
import useCart from "./Hooks/useCart";

function App() {
  const [products] = useProduct();
  const [category, setCategory] = useState("");
  const [productType, setProductType] = useState("");
  const [brand, setBrand] = useState("");
  const [cart, setCart] = useCart();

  useEffect(() => {
    const initialCategory = localStorage.getItem("category");
    const initialBrand = localStorage.getItem("brand");
    const initialProductType = localStorage.getItem("productType");
    setCategory(initialCategory);
    setBrand(initialBrand);
    setProductType(initialProductType);
  }, []);
  let categoryProducts = [];
  if (category === "all") {
    categoryProducts = products;
  } else if (category === "purePerfumeOil") {
    categoryProducts = products?.filter(
      (product) => product?.productType.toLowerCase() === "oil"
    );
  } else if (category === "perfumeMen") {
    categoryProducts = products?.filter(
      (product) => product?.gender.toLowerCase() === "men"
    );
  } else if (category === "perfumeWomen") {
    categoryProducts = products?.filter(
      (product) => product?.gender.toLowerCase() === "women"
    );
  } else if (category === "perfumeBrand") {
    categoryProducts = products?.filter(
      (product) =>
        product?.category.toLowerCase() === "perfume" &&
        product.brand.toLowerCase() === brand
    );
  } else if (category === "deoBrand") {
    categoryProducts = products?.filter(
      (product) =>
        product?.category.toLowerCase() === "deodorant" &&
        product.brand.toLowerCase() === brand
    );
  } else if (category === "body") {
    categoryProducts = products?.filter(
      (product) =>
        product?.productType.toLowerCase() === productType.toLowerCase()
    );
  } else if (category === "brand") {
    categoryProducts = products?.filter(
      (product) => product?.brand.toLowerCase() === brand?.toLowerCase()
    );
  } else if (category === "bestsellerAll") {
    const perfume = products
      ?.filter((product) => product?.category.toLowerCase() === "perfume")
      .slice(0, 10);
    const deodorant = products
      ?.filter((product) => product?.category.toLowerCase() === "deodorant")
      .slice(0, 10);
    const mist = products
      ?.filter((product) => product?.category.toLowerCase() === "mist")
      .slice(0, 10);
    if (perfume && deodorant && mist) {
      categoryProducts = [...perfume, ...deodorant, ...mist];
    }
  } else if (category === "bestseller") {
    categoryProducts = products
      ?.filter(
        (product) => product?.category.toLowerCase() === brand?.toLowerCase()
      )
      .slice(0, 20);
  } else {
    categoryProducts = products?.filter(
      (product) => product?.category.toLowerCase() === category?.toLowerCase()
    );
  }
  return (
    <ThemeContext.Provider
      value={{
        categoryProducts,
        setCategory,
        setBrand,
        setProductType,
        products,
        cart,
        setCart
      }}
    >
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </ThemeContext.Provider>
  );
}

export default App;
