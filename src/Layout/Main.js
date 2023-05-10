import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Category from "../Components/Category/Category";
import Features from "../Components/Features";



const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Category></Category>
      <Features></Features>      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;