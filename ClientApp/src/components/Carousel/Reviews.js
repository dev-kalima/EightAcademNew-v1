// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Reviews.css";

// import required modules
import { Pagination } from "swiper";

export default function Reviews() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        <SwiperSlide>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio maxime facere praesentium reiciendis necessitatibus delectus aliquam quam labore alias itaque, quod laudantium distinctio id error, facilis repellat culpa eveniet repudiandae. Libero quibusdam animi amet voluptatem rerum soluta porro, maiores minus quas, voluptatibus in aut laudantium eos et, laborum quidem tenetur voluptates dolorum architecto! Libero, ad. Ipsam explicabo, earum dolorum fuga hic eum, ea vero et velit tenetur officia praesentium sunt. Provident atque nisi in. Cupiditate nobis sit consequatur cum repudiandae eligendi, rem beatae nam? Veritatis nostrum aliquam quidem labore doloribus dignissimos eligendi architecto repudiandae aliquid placeat, repellat, sit iste?</SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
