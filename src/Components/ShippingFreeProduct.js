import React from 'react';

const ShippingFreeProduct = ({product}) => {
    return (
        <div className="cartModalProductContainer">

        <div className="cartModalProduct">
          <img src={product.img} alt="" />
          <div className="cartModalProductDetails">
            <p>{product.name}</p>
            <p>
              price : <span className='text-accent font-bold'>Free</span>
            </p>
            <p>Quantity : 1</p>
          </div>
        </div>
      </div>
    );
};

export default ShippingFreeProduct;