import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "./BestSellerCard";
import p12 from "../assets/p12.png";
import p15 from "../assets/p15.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function BestSeller() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

  const BestSellerArr = [
    {
      id: 1,
      title: "Element Sync",
      name: "Smart Home Speaker - Variant Image Set",
      price: 67.7,
      img: p12,
    },
    {
      id: 2,
      title: "Drifly",
      name: "Indoor WiFi Smart Camera Pan & Tilt",
      price: 89.0,
      img: p15,
    },
    {
      id: 3,
      title: "Element Sync",
      name: "Smart Home Speaker - Variant Image Set",
      price: 67.7,
      img: p12,
    },
    {
      id: 4,
      title: "Drifly",
      name: "Indoor WiFi Smart Camera Pan & Tilt",
      price: 89.0,
      img: p15,
    },
    {
      id: 5,
      title: "Element Sync",
      name: "Smart Home Speaker - Variant Image Set",
      price: 67.7,
      img: p12,
    },
    {
      id: 6,
      title: "Drifly",
      name: "Indoor WiFi Smart Camera Pan & Tilt",
      price: 89.0,
      img: p15,
    },
  ];
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 10 }).map((_, index) => `Slide ${index + 1}`)
  );

  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <div className="w-[80%] mx-auto">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {BestSellerArr.map((data) => (
          <SwiperSlide key={data.id}>
            <BestSellerCard
              name={data.name}
              img={data.img}
              title={data.title}
              price={data.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
