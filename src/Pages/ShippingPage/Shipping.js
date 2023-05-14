import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { toast } from "react-hot-toast";

const Shipping = () => {
    const [user] = useAuthState(auth)
    const {cart} = useContext(ThemeContext)
    const handleShipping=(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const address = e.target.address.value;
        const appartment = e.target.appartment.value;
        const phone = e.target.phone.value;

        const orderList ={
            email,
            name,
            address,
            appartment,
            phone,
            cart,
        }
        fetch('https://fragrance-backend.vercel.app/order',{
            method:'post',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(orderList)
          })
          .then(res=>res.json())
          .then(data=>{
            console.log(data)
          })
          toast.success("ORDER CONFIRMED")
    }
  return (
    <div className="2xl:w-[65%] md:w-[75%] w-[90%] mx-auto">
      <div className="my-10">
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

      <form
        onSubmit={handleShipping}
        className="flex flex-col w-[80vw] md:w-[30vw] my-[30px]"
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
          type="name"
          name="name"
          required
          placeholder="Full name"
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
    </div>
  );
};

export default Shipping;
