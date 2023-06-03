import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { toast } from "react-hot-toast";
import CartModalProduct from "../../Components/CartModalProduct";
import ShippingCartProduct from "../../Components/ShippingCartProduct";
import ShippingFreeProduct from "../../Components/ShippingFreeProduct";
import { RotatingLines } from "react-loader-spinner";

const Shipping = () => {
  const [user] = useAuthState(auth);
  const { cart, setCart } = useContext(ThemeContext);
  const { setFreeProduct } = useContext(ThemeContext);
  const { customerList } = useContext(ThemeContext);
  const { loading } = useContext(ThemeContext);
  const freeProducts = JSON.parse(localStorage.getItem("freeProducts"));
  let shippingCart;
  if (freeProducts?.length > 0) {
    shippingCart = [...cart, ...freeProducts];
  } else {
    shippingCart = cart;
  }
  const customerInfo = customerList?.find(
    (customer) => customer?.email === user?.email
  );

  const handleShipping = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const address = e.target.address.value;
    const appartment = e.target.appartment.value;
    const phone = e.target.phone.value;

    const data = {
      payment_method: "bacs",
      payment_method_title: "Direct Bank Transfer",
      set_paid: true,
      customer_id: customerInfo?.id || 0,
      billing: {
        first_name: firstName,
        last_name: lastName,
        address_1: appartment,
        address_2: "",
        city: address,
        state: address,
        postcode: "",
        country: "Bangladesh",
        email: email,
        phone: phone,
      },
      shipping: {
        first_name: firstName,
        last_name: lastName,
        address_1: appartment,
        address_2: "",
        city: address,
        state: address,
        postcode: "",
        country: "Bangladesh",
      },
      line_items: shippingCart.map((product) => {
        return {
          product_id: product.id,
          quantity: product.quantity,
          total: JSON.stringify(product.price * product.quantity),
        };
      }),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Flat Rate",
          total: "10.00",
        },
      ],
    };
    // const queryString = new URLSearchParams(data).toString();
    // fetch(`http://localhost:5000/ssl-request`, {
    //   mode: 'cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //   },
    // })
    //   .then(res=>res.json())
    //   .then(data=>{
    //     console.log(data)
    //   })

    fetch("http://localhost:5000/postOrder", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    setCart([]);
    setFreeProduct([]);
    localStorage.removeItem("shopping-cart");
    localStorage.removeItem("freeProducts");
    e.target.reset();
    toast.success("ORDER CONFIRMED");
  };
  return (
    <div className="2xl:w-[65%] md:w-[75%] w-[90%] mx-auto ">
      <div className="my-10 sm:my-10">
        <p className="text-[12px] font-semibold">
          Cart
          <FontAwesomeIcon
            className="mx-2"
            icon={faCaretRight}
          ></FontAwesomeIcon>
          Information
          <FontAwesomeIcon
            className="mx-2"
            icon={faCaretRight}
          ></FontAwesomeIcon>
          Shiping
        </p>
      </div>
      <div className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between sm:gap-20">
        <form
          onSubmit={handleShipping}
          className="flex flex-col w-[80vw] md:w-[50%] sm:my-[30px]"
        >
          <p className="font-bold my-3">Contact</p>
          <input
            className="p-2 mb-2 border border-secondary text-black"
            type="email"
            name="email"
            required
            value={user?.email}
          />
          <p className="font-bold my-3">Shipping address</p>
          <input
            className="p-2 mb-2 border border-secondary text-black"
            type="text"
            name="firstName"
            required
            placeholder="First name"
          />
          <input
            className="p-2 mb-2 border border-secondary text-black"
            type="text"
            name="lastName"
            required
            placeholder="Last name"
          />
          <input
            className="p-2 border border-secondary mb-2 text-black"
            type="text"
            name="address"
            required
            placeholder="Address"
          />
          <input
            className="p-2 border border-secondary mb-2 text-black"
            type="text"
            name="appartment"
            required
            placeholder="Appartment, suite, etc."
          />
          <input
            className="p-2 border border-secondary mb-8 text-black"
            type="number"
            name="phone"
            required
            placeholder="Phone number"
          />
          <input
            type="submit"
            className="btn mb-8 btn-secondary border-none text-white hover:bg-accent"
            value="Check out"
          />
        </form>

        <div className="w-[100%] sm:w-[50%] my-[30px] mt-10 h-[65vh] shipping-cart-products overflow-y-scroll">
          <p className="font-bold">Cart Products</p>
          <div>
            {loading ? (
              <div className="flex justify-center items-center my-10">
                <RotatingLines
                  strokeColor="#cb9815"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="80"
                  visible={true}
                />
              </div>
            ) : (
              cart?.map((product) => (
                <ShippingCartProduct product={product}></ShippingCartProduct>
              ))
            )}
          </div>
          <p className="font-bold">Free Products</p>
          <div>
            {loading ? (
              <div className="flex justify-center items-center my-10 ">
              <RotatingLines
                  strokeColor="#cb9815"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="60"
                  visible={true}
                />
              </div>
            ) : (
              freeProducts?.map((product) => (
                <ShippingFreeProduct product={product}></ShippingFreeProduct>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
