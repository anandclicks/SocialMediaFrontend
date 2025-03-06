import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Make sure to import Swiper styles

const Stories = () => {
  return (
  <div>
    <h3 className="text-xl">Stories</h3>
      <Swiper spaceBetween={20} slidesPerView={6} loop={true}>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="storySlide h-[180px] w-[120px] rounded-2xl bg-stone-200 relative cursor-pointer">
          <div className="userProfileLogo h-[50px] w-[50px] rounded-full bg-white m-2"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
};

export default Stories;
