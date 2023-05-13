import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "./Featured.css";
import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ThemeContext";
import { Link } from "react-router-dom";

const Featured = () => {
  const {setCategory , setBrand} = useContext(ThemeContext)
  return (
    <div className="featured">
 
        <Link onClick={() => {
            setCategory("perfumeMen");
            localStorage.setItem("category", "perfumeMen");
          }}
          to="/category/Fragrance for men">
          
          <img
            className=""
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-2_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />
        </Link>

        <Link onClick={() => {
            setCategory("perfumeWomen");
            localStorage.setItem("category", "perfumeWomen");
          }}
          to="/category/fragrance for women">
          <img
            className=""
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-1_1024x1024_crop_center.jpg?v=1664175317"
            alt=""
          />
        </Link>

        <Link onClick={() => {
          setCategory("perfume");
          localStorage.setItem("category", "perfume");
        }}
        to={`/category/classic collection`}>

          <img
            className="w-[400px]"
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-3_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />

        </Link>

        <Link to={`/category/New collection`}
          onClick={() => {
          setCategory("online exclusive");
          localStorage.setItem("category", "online exclusive");
          }}>
          <img
            className="w-[400px]"
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-4_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
          />

        </Link>

        <Link onClick={()=>{
              setCategory("brand")
              localStorage.setItem('category','brand')
              setBrand("flavia")
              localStorage.setItem('brand','flavia')
            }}
            to="/category/flavia">
             
          <img
            className="w-[400px]"
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/armaf_resize_1024x1024_crop_center.jpg?v=1664191126"
            alt=""
          />
        </Link>

        <Link className="cursor-pointer" to={`/category/Body & bath`}
            onClick={() => {
            setCategory("body & bath");
            localStorage.setItem("category", "body & bath");
           }}>

           <img 
            src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-6_1_1024x1024_crop_center.jpg?v=1664175316"
            alt=""
            />

        </Link>

        

      

         
    </div>
  );
};

export default Featured;
