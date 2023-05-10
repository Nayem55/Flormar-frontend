import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTruck, faStar, faCartShopping, faBurst} from '@fortawesome/free-solid-svg-icons'

const Features = () => {
  return (
    <div className="flex justify-center py-6  2xl:w-[65%] md:w-[75%] mx-auto text-[12px] 2xl:text-[14px]">
      <p className="font-bold mr-12">
        <FontAwesomeIcon icon={faBurst}></FontAwesomeIcon> EXCLUSIVE IMPORTER{" "}
      </p>
      <p className="font-bold mr-12">
        <FontAwesomeIcon icon={faTruck}></FontAwesomeIcon> SHIPPING ACCROSS
        BANGLADESH{" "}
      </p>
      <p className="font-bold mr-12">
        <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> GENUINE PRODUCT
        GUARANTEE{" "}
      </p>
      <p className="font-bold mr-12">
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> FREE DELIVERY
        ABOVE 999 TK.{" "}
      </p>
    </div>
  );
};

export default Features;
