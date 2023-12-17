// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";



// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";

import slideimg1 from '../image/Student1.png'
import slideimg2 from '../image/Student2.png'
import slideimg3 from '../image/Student3.png'
import slideimg4 from '../image/Student4.png'
import slideimg5 from '../image/Student5.png'
import slideimg6 from '../image/Student6.png'


export default function Mainslider() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={false}
        // navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        // modules={[Autoplay,EffectFlip, Pagination, Navigation]}


       
      
        navigation={false}
      


        modules={[Autoplay, Pagination, Navigation]}
       
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slideimg1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideimg6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
