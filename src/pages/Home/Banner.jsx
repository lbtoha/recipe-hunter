import "swiper/css";
import "swiper/css/pagination";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Autoplay]);
const img1 = "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const img2 = "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const img3 = "https://images.unsplash.com/photo-1611657365907-1ca5d9799f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const img4 = "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const img5 = "https://images.unsplash.com/photo-1574966740793-953ad374e8fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const img6 = "https://plus.unsplash.com/premium_photo-1661778029158-e1a758c26bf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80";

const Banner = () => {
  return (
    <div className="banner-image w-full h-[300px] lg:h-[calc(100vh-72px)] bg-center bg-cover ">
      <div className="bg-black w-full h-[300px]  lg:h-[calc(100vh-72px)] absolute opacity-70"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative lg:border-e-2 lg:border-rose-600 my-10 h-[calc(100vh-200px)] mb-10">
          <div className=" flex items-center justify-center lg:h-full">
            <div>
              <h1 className="text-white font-Satisfy text-4xl lg:text-6xl text-center">Our Professional</h1>
              <p className="text-white font-Poppins text-4xl lg:text-6xl font-bold text-center pt-6">Chef</p>
            </div>
          </div>
        </div>
        <div className="my-auto hidden lg:block">
          <Swiper slidesPerView={2} spaceBetween={30} centeredSlides={true} modules={[Pagination]} autoplay={{ delay: 2000 }} loop={true} className="mySwiper ">
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img1} alt="" />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img2} alt="" />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img3} alt="" />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img4} alt="" />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img5} alt="" />;
              }}
            </SwiperSlide>
            <SwiperSlide>
              {({ isActive }) => {
                return <img className={`object-center object-contain ${isActive ? "border-2" : ""} border-yellow-400 `} src={img6} alt="" />;
              }}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
