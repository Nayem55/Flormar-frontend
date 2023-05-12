import React, { useContext } from "react";
import "./Product.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { toast } from "react-hot-toast";

const Product = ({ product,list }) => {
  const [user] = useAuthState(auth)
  const {cart,setCart} = useContext(ThemeContext)

  const handleAddToCart=(item)=>{

      const cartProduct = {
        _id:item._id,
        name: item.name,
        img: item.img,
        category: item.category,
        price: item.price,
        review: item.review,
        brand: item.brand,
        stock: item.stock,
        quantity: item.quantity,
        gender: item.gender,
        productType: item.productType,
        description: item.description,
        email: user?.email
      }

    let newCart = [];
    const exist = cart.find((product) => product._id === item._id);
    if (!exist) {
      fetch('http://192.168.0.200:5000/cart',{
        method:'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartProduct)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
      })
      newCart = [...cart,cartProduct];
    }
    
    else {
      exist.quantity=exist.quantity+1;
      fetch('http://localhost:5000/cart',{
        method:'put',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(exist)
      })
      .then(res=>res.json())
      .then(data=>{
        // console.log(data)
      })
      const rest = cart.filter(item=>item._id!==exist._id)
      newCart = [...rest,exist];
     }
    setCart(newCart);
    toast.success("ADDED TO CART")
  }
  return (
    <div className="product">
      <div className="img-container">
        <div className="img-div">
          <img src={product?.img} alt="" />
        </div>
        <button className="details-btn">VIEW DETAILS</button>
        <button onClick={()=>handleAddToCart(product)} className='add-btn'>ADD TO CART</button>
      </div>
      <div className="product-details">
        <p className="opacity-[70%]">{product?.brand.toUpperCase()}</p>
        <p>{product?.name}</p>
        <p>200 reviews</p>
        <p>{list?product?.description:""}</p>
        <p className="text-accent font-bold">{product?.price} TK.</p>
        <button onClick={()=>handleAddToCart(product)} className={`list-btn `}>ADD TO CART</button>

      </div>
    </div>
  );
};

export default Product;
