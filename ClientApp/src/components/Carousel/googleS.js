// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import herore from '../Carousel/greviewimg/herore.png'
import dr from '../Carousel/greviewimg/dr.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./googleS.css";

// import required modules
import {Autoplay, Pagination, Navigation } from "swiper";


export default function GoogleS() {
  return (
    <>
    <div className="googlemain">
        <h2>Our Student's Love Us</h2>
    </div>
      <Swiper




        slidesPerView={1}

        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400:{
              slidesPerView:1,
            },
            639: {
              slidesPerView: 2,
            },
            865:{
              slidesPerView:2
            },
            1000:{
              slidesPerView:3
            },
            1500:{
              slidesPerView:3
            },
            1700:{
              slidesPerView:3
            }
          }}


        spaceBetween={0}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,Pagination, Navigation]}
        
        className="mySwiper"
      >
        
        <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 1</h3>
            <span>Basic Computer</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div>  </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={dr} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 2</h3>
            <span>Graphic Design</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div>  </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 3</h3>
            <span>AutoCad</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div> </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 4</h3>
            <span>Tally</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div> </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 5</h3>
            <span>ADCA</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div> </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 6</h3>
            <span>Google sketch up</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div> </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 7</h3>
            <span>C,C++</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div></div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 8</h3>
            <span>Revit</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div>  </div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 9</h3>
            <span>Python</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div></div></SwiperSlide>
             <SwiperSlide className="Rmain">
        <div className="rimg"><img src={herore} alt="" /></div>
            <div className="Rbox" >
            <h3>Tom Cruise 10</h3>
            <span>Java</span>
            <hr />
            <div className="reviewcontant"> Eight academy is a very great academy there teaching methods is great they always coperate with students. In this academy they develop personality also and education system is so good their teachers is also very intelligent and understanding.</div> </div></SwiperSlide>
        

        
       
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
