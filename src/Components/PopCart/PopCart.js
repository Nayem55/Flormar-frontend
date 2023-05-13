import "./PopCart.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useScroll from "../../Hooks/useScroll";
import { removeFromDb } from "../../utilities/CartDb";

const PopCart = ({popCart,handlePopCart}) => {
  const { cart, setCart } = useContext(ThemeContext);
  const [scrollPosition] = useScroll();

  let price = 0;
  let quantity = 0;

  cart?.forEach((product) => {
    quantity = quantity + product.quantity;
    price = price + product.price * product.quantity;
  });

  const handleDelete = (id) => {
    const rest = cart.filter(product => product._id !== id)
    setCart(rest)
    removeFromDb(id)
    console.log(id)

}

  return (
    <div className={`pop-cart-container  ${popCart?'':'top-900'} ${scrollPosition>80?'top-[60px]':'top-[50px]'}`}>
      <div className="pop-cart-products pr-4 max-h-[400px] overflow-y-scroll">
        {cart?.map((product) => (
          <div key={product._id} className="pop-product mb-4 gap-4 flex h-[30%] items-center">
            <div className="pop-img w-[20%] h-[70px]">
              <img src={product.img} className="w-full h-full" alt="" />
            </div>
            <div className="pop-details w-[65%] mr-2">
              <h3 className="">{product.name}</h3>
              <p>
                ${product.price}X{product.quantity}
              </p>
            </div>
            <FontAwesomeIcon
              className="text-secondary hover:text-accent cursor-pointer"
              onClick={() => {
                handleDelete(product._id);
              }}
              icon={faTrash}
            ></FontAwesomeIcon>
          </div>
        ))}
      </div>

      <div className="flex justify-between py-4 ">
        <p>Total:</p>
        <p>${price}</p>
      </div>
      <Link className="add-btn" to="/shipping">

        CHECKOUT NOW
      </Link>
      <Link className="view-cart" to={"/cart"} onClick={()=> handlePopCart(false)}>

        OR VIEW CART
      </Link>
    </div>
  );
};

export default PopCart;
