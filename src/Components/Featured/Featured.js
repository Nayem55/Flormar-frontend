import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured">
             <Swiper
             autoplay={{
          delay: 4000 ,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 50,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper my-[150px]"
      >
        <SwiperSlide className="swiper-cover-img">
          <img className="" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-2_1_1024x1024_crop_center.jpg?v=1664175316" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-1_1024x1024_crop_center.jpg?v=1664175317" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[400px]" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-3_1_1024x1024_crop_center.jpg?v=1664175316" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[400px]" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-4_1_1024x1024_crop_center.jpg?v=1664175316" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[400px]" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/armaf_resize_1024x1024_crop_center.jpg?v=1664191126" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[400px]" src="https://cdn.shopify.com/s/files/1/0559/7921/2972/files/Armaf-Category-Banner-6_1_1024x1024_crop_center.jpg?v=1664175316" alt="" />
        </SwiperSlide>
        
      </Swiper> 
        </div>
    );
};

export default Featured;