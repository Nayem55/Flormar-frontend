import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Category from "../Components/Category/Category";


const Main = () => {

  return (
    <div>
      <Navbar></Navbar>
      <Category></Category>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;