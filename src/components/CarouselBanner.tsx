import { useRef} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import slideImg1 from "@/assets/slide_01-_1.png";
import slideImg2 from "@/assets/slide003.png";
import videoFb from "@/assets/video-fb1.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselCard from "./CarouselCard";
import ProgressIcon from "../icons/ProgressIcon";

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
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
        className="mySwiper">
        <SwiperSlide>
          <CarouselCard imageprop={slideImg1} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imageprop={slideImg2} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard imageprop={videoFb} />
        </SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
         <ProgressIcon ref={progressCircle}/>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
