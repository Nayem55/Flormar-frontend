import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "./HomeBrand.css";


const SpecialProducts = () => {
  return (
    <div className="homeBrand">
        <h2 className="text-center">OUR BRANDS</h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Navigation,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf_Luxury_french_logo_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Flavia_Square_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/estiara_29f0aab0-ba7e-4df8-8eb7-7db49e5978a6_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Estiara_Logo_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Bioluxe_Logo_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Paris_350x.jpg?v=1620128356"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpecialProducts;
