import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./SpecialProduct.css";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";

const SpecialProducts = () => {
  return (
    <div className="special-product">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Vanity_Femme_Essence_100mnl_W_1c_350x.jpg?v=1635150142"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Tres_Nuit_M_1c_350x.jpg?v=1635150382"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Sillage_105ml_-_5_350x.jpg?v=1635150103"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/TRES_JOUR_W_deo_200ml-1c_350x.jpg?v=1635150500"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/TAG_HER_200ml_deo_-1c_350x.jpg?v=1635150586"
              alt=""
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link>
            <img
              src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/TAG_HIM_200ml_deo_-1c_350x.jpg?v=1635150612"
              alt=""
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SpecialProducts;
