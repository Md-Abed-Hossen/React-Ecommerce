import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import slide_01 from '@/assets/slide_01-_1.png'
import slide003 from '@/assets/slide003.png'
import videofb1 from '@/assets/video-fb1.png'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CarouselCard from './CarouselCard';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><CarouselCard imageprop={slide_01}/></SwiperSlide>

        <SwiperSlide><CarouselCard imageprop={slide003}/></SwiperSlide>
        <SwiperSlide><CarouselCard imageprop={videofb1}/></SwiperSlide>
   
        
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
