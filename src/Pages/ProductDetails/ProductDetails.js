import React, { useContext, useState } from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-hot-toast";
import { addToDb } from "../../utilities/CartDb";

const ProductDetails = () => {
  const { products } = useContext(ThemeContext);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useContext(ThemeContext);

  const product = products?.find((product) => product._id === id);

  const handleAddToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product?._id == item._id);
    if (!exists) {
      item.quantity = quantity;
      newCart = [...cart, item];
    } else {
      item.quantity = exists.quantity + quantity;
      const rest = cart.filter((product) => product?._id !== item._id);
      newCart = [...rest, item];
    }
    setCart(newCart);
    addToDb(item._id,quantity);

    toast.success("ADDED TO CART");
  };

  const handlePurchase = (item) => {
    let newCart = [];
    item.quantity = quantity;
    newCart = [item];
    let shoppingCart = {};
    shoppingCart[id] = quantity;

    setCart(newCart);
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

    toast.success("ADDED TO CART");
  };

  

  return (
    <div className="productDetails-container flex 2xl:w-[65%] md:w-[75%] mx-auto">
      <div className="productDetails flex items-center w-[50%]">
        <img src={product?.img} alt="" />
      </div>

      <div className="w-[50%] py-10">
        <p className="text-3xl my-3">{product?.name}</p>
        <div className="text-[#f3c621]">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
        <p className="text-sm text-secondary text-opacity-70">
          {product?.brand?.toUpperCase()}
        </p>
        <p>Availablity : In Stock</p>
        <p>Product Type : {product?.productType?.toUpperCase()}</p>
        <p className="my-10 text-secondary text-opacity-70">
          {product?.description}
        </p>
        <p className="text-accent text-3xl font-bold my-8">
          {" "}
          $ {product?.price}{" "}
        </p>
        <p>Quantity</p>
        <div className="flex items-center">
          <FontAwesomeIcon
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="text-secondary cursor-pointer text-xs p-[6px] border border-secondary"
            icon={faMinus}
          ></FontAwesomeIcon>
          <input
            type="text"
            Value={quantity}
            className="border-secondary border w-[90px] my-2 text-center"
          />
          <FontAwesomeIcon
            onClick={() => setQuantity(quantity + 1)}
            className="text-secondary bg-primary cursor-pointer text-xs p-[6px] border border-secondary"
            icon={faPlus}
          ></FontAwesomeIcon>
        </div>
        <p className="my-2 font-bold">Subtotal: ${product?.price * quantity}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="btn bg-secondary hover:bg-secondary text-primary w-[60%] font-bold mb-2 rounded"
        >
          Add to cart
        </button>
        <Link
          to='/shipping'
          onClick={() => handlePurchase(product)}
          className="btn bg-primary hover:text-primary hover:bg-secondary text-secondary w-[90%] font-bold rounded"
        >
          Buy it now
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
