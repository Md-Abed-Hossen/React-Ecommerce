import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestSellerCard from "@/components/ProductSliderCard";
import p12 from "@/assets/p12.png";
import p15 from "@/assets/p15.png";
import { filterText } from "./AtomsConfig";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useAtom } from "jotai";

export const productsArray = [
  {
    id: 1,
    title: "Element Sync",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p12,
    category: "doorbell",
  },
  {
    id: 2,
    title: "Drifly",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p12,

    category: "doorbell",
  },
  {
    id: 3,
    title: "Element Sync",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p12,
    category: "doorbell",
  },
  {
    id: 4,
    title: "DRIFLY",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p12,
    category: "doorbell",
  },
  {
    id: 5,
    title: "Element Sync",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p12,
    category: "doorbell",
  },
  {
    id: 6,
    title: "Drifly",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p12,
    category: "doorbell",
  },
  {
    id: 7,
    title: "Element Sync security",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p15,
    category: "security",
  },
  {
    id: 8,
    title: "Drifly security",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p15,
    category: "security",
  },
  {
    id: 9,
    title: "Element Sync security",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p15,
    category: "security",
  },
  {
    id: 10,
    title: "DRIFLY security",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p15,
    category: "security",
  },
  {
    id: 11,
    title: "Element Sync security",
    name: "Smart Home Speaker - Variant Image Set",
    price: 67.7,
    img: p15,
    category: "security",
  },
  {
    id: 12,
    title: "Drifly security",
    name: "Indoor WiFi Smart Camera Pan & Tilt",
    price: 89.0,
    img: p15,
    category: "security",
  },
];
const ProductSlider = () => {
  const [products, setProducts] = useState(productsArray);
  const [category, setCategory] = useAtom(filterText);

  useEffect(() => {
    if (category) {
      const filtered = productsArray.filter(
        (item) => category === item.category
      );
      console.log(category, filtered);
      setProducts(filtered);
    }
  }, [category]);

  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);

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
    <div className="mx-auto h-[510px]">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={5}
        spaceBetween={20}
        navigation={true}
        virtual
      >
        {products.length ? (
          products.map((data) => (
            <SwiperSlide key={data.id}>
              <BestSellerCard
                name={data.name}
                img={data.img}
                title={data.title}
                price={data.price}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <h2>No Product found</h2>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
