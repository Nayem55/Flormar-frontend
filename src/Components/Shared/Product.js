import React, { useContext, useRef } from "react";
import "./Product.css";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { toast } from "react-hot-toast";
import { addToDb } from "../../utilities/CartDb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

const Product = ({ product, list }) => {
  const { cart, setCart } = useContext(ThemeContext);
  const navigate = useNavigate();
  const dialogueRef=useRef();
  
  const handleAddToCart = (item) => {
    let newCart = [];
    const exists = cart.find((product) => product._id == item._id);
    if (!exists) {
      item.quantity = 1;
      newCart = [...cart, item];
    } else {
      item.quantity = exists.quantity + 1;
      const rest = cart.filter((product) => product._id !== item._id);
      newCart = [...rest, item];
    }
    setCart(newCart);
    addToDb(item._id);

    toast.success("ADDED TO CART");
  };

  const handleModal=() => {
    dialogueRef.current.showModal()
    document.body.style.overflow='hidden'
  }

  const handleBlurClose=()=>{
    dialogueRef.current.close()
    document.body.style.overflow='visible'

  }
  return (
    <div className="product">
      <div className="img-container cursor-pointer">
        <div
          onClick={() => navigate(`/product/${product._id}`)}
          className="img-div"
        >
          <img src={product?.img} alt="" />
        </div>
        {/* The button to open modal */}
        <button  className="details-btn" onClick={handleModal} >
          VIEW DETAILS
        </button>
        <Modal handleModal={handleModal} handleBlurClose={handleBlurClose} product={product} dialogueRef={dialogueRef}></Modal>
        <button onClick={() => handleAddToCart(product)} className="add-btn">
          ADD TO CART
        </button>
      </div>
      <div className="product-details">
        <p className="opacity-[70%]">{product?.brand.toUpperCase()}</p>
        <p>{product?.name}</p>
        <div className="text-[#f3c621]">
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
        </div>
        <p>{list ? product?.description : ""}</p>
        <p className="text-accent font-bold">{product?.price} TK.</p>
        <button
          onClick={() => handleAddToCart(product)}
          className={`list-btn `}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default Product;
