import banner1 from "../../Images/banner1.webp";
import banner2 from '../../Images/banner2.webp'
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade, Navigation} from "swiper";

import './Banner.css'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";




const Banner = () => {
  return (
    <div className="h-[80vh]">
       <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
     
        autoplay={{
          delay: 10000 ,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" src={banner2} alt="" />
        </SwiperSlide>

      </Swiper>
      
    </div>
  );
};

export default Banner;
