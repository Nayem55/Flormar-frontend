import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

import Features from "../Components/Features";
import Header from "../Components/Header/Header";



const Main = () => {


  return (
    <div>
      <Header></Header>
      <Features></Features>      
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;