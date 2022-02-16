import React from 'react'
// Core modules imports are same as usual
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import 'swiper/modules/effect-fade/effect-fade';
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";

export default function SliderTest() {
   
    return (

    <div>
      <div className="container">
        <div className="w-full mx-auto">
            <h1>Slider Test</h1>
            <Swiper
              modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                freeMode = {true}
                pagination={{ 
                  clickable: true ,
                  el: ".swiper-pagination",
                
                }}
              >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </div>
      
      </div>
         
    </div>


     )
}
