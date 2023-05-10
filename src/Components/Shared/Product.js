import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="img-container">
        <div className="img-div">
          <img src={product.img} alt="" />
        </div>
        <button className="details-btn">VIEW DETAILS</button>
        <button className="add-btn">ADD TO CART</button>
      </div>
      <div className="product-details">
        <p className="opacity-[70%]">{product.brand.toUpperCase()}</p>
        <p>{product.name}</p>
        <p>200 reviews</p>
        <p className="text-accent font-bold">{product.price} TK.</p>
      </div>
    </div>
  );
};

export default Product;
