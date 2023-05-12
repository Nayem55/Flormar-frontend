import React, { useContext, useRef } from "react";
import "./CartProduct.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../Contexts/ThemeContext";

const CartProduct = ({ product }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const quantityRef = useRef();

  const handleUpdate = (product) => {
    const quantity = parseInt(quantityRef.current.innerText);
    product.quantity = quantity;
    fetch("http://192.168.0.200:5000/cart", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(
          cart.map((pd) => {
            if (pd._id === product._id) {
              pd.quantity = parseInt(quantityRef.current.innerText);
              return pd;
            } else return pd;
          })
        );
      });
  };

  const handleDelete = (item) => {
    fetch("http://192.168.0.200:5000/cart", {
      method: "delete",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
      });
    const rest = cart.filter((product) => product._id !== item._id);
    setCart(rest);
  };


  return (
    <div className="flex items-center h-[200px]">
      <div className="flex w-[80%]">
        <div className="cart-product-container">
          <div className="cart-img-container ">
            <img className="" src={product?.img} alt="" />
          </div>
          <div className="cart-product-details">
            <p className="opacity-70">{product?.name}</p>
            <p>{product?.brand.toUpperCase()}</p>
            <p className="text-accent font-bold">${product?.price}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[20%] gap-0 ">
        {/*--------------- Input Group  --------------*/}
        <div className="flex gap-6 items-center">
          <div className="w-[70%] relative">
            <span
              onClick={() => quantityRef.current.innerText = parseInt(quantityRef.current.innerText)+1}
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                className="upArrow text-secondary text-sm text-opacity-50"
                icon={faCaretUp}
              ></FontAwesomeIcon>
            </span>
            <div
              name="quantity"
              ref={quantityRef}
              className="px-2 pt-1 border w-full border-secondary quantity-input "
            >
              {product.quantity}
            </div>
            <span
              onClick={() =>{
                if(parseInt(quantityRef.current.innerText)>1){
                    quantityRef.current.innerText = parseInt(quantityRef.current.innerText)-1
                }
              }}
              className="cursor-pointer"
            >
              <FontAwesomeIcon
                className="downArrow text-sm text-secondary text-opacity-50"
                icon={faCaretDown}
              ></FontAwesomeIcon>
            </span>
          </div>

        <Link
          onClick={() => {
            handleDelete(product);
            quantityRef.current.innerText = product.quantity
          }}
        >
          <FontAwesomeIcon className="hover:text-accent" icon={faTrash}></FontAwesomeIcon>
        </Link>
        </div>
          <Link
            onClick={() => {
              handleUpdate(product);
            }}
            className="text-xs hover:text-accent font-bold mt-4"
          >
            Update Cart
          </Link>

      </div>
    </div>
  );
};

export default CartProduct;
