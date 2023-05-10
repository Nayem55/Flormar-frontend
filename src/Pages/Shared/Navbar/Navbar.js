import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../Images/Flormar-Logo-Png-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSquarePhoneFlip, faUser} from '@fortawesome/free-solid-svg-icons'
import useScroll from "../../../Hooks/useScroll";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";


const Navbar = () => {
  const [scrollPosition]= useScroll();
  const [user] = useAuthState(auth)

  return (
    <div className="w-full z-10">
      <div className="flex justify-end px-10">
        <p className="font-bold mr-16">
        <FontAwesomeIcon icon={faSquarePhoneFlip} className="mr-2"></FontAwesomeIcon>
        Call Us on 90764 05205
        </p>
        <p className="font-bold flex">
        <FontAwesomeIcon icon={faUser} className="mr-2 mt-[2px]"></FontAwesomeIcon>
        {user ? <Link className="hover:text-accent" to="/login" onClick={()=>signOut(auth)}>Log Out</Link> : <div>
        <Link to='login' className="hover:text-accent">Sign in</Link> or <Link to="signup" className="hover:text-accent">Create an account</Link>
        </div>}
        </p>
      </div>
      <div className="navbar px-0 lg:px-10 flex justify-between bg-white">
        {/* logo */}
        <div className="cursor-pointer">
          <Link to="/">
            <img src={logo} className="w-44" alt="" />
          </Link>
        </div>
        {/* search bar */}
        <div className="form-control text-black w-[40%]">
          <div className="input-group">
            <input
              type="text"
              className="border border-black w-[100%] px-4"
              placeholder="Search for a product..."
            />
            <button className="btn btn-square bg-secondary hover:bg-accent border border-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex-none">
          {/* Navbar Cart */}
          <div className={` cart-icon  ${scrollPosition>10 ?'cart-scrolled-50': 'cart-not-scrolled'} ${scrollPosition>80 ?'cart-scrolled-80': 'cart-scrolled-50'} `}>
            <div className="indicator">
              {/* cart icon */ }
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`transition ease-in duration-200 ${scrollPosition>80 ?'text-primary h-6 w-6 cursor-pointer' : 'h-7 w-7 text-secondary cursor-pointer'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className={`badge  bg-accent text-primary font-bold border-none ${scrollPosition>80?'badge-sm text-xs pt-1':'badge-md text-lg pt-1'} badge-sm text-xs pt-1 indicator-item`}>
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
