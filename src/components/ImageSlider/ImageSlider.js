import React, { useState } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import slider1 from "../../assets/images/slider1.webp";
import slider2 from "../../assets/images/slider2.webp";
import "./imageSlider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const initialData = [
  {
    id: 1,
    // image: demoWishlist,
  },
  {
    id: 2,
    // image: demo2,
  },
];
const ImageSlider = () => {
  const [productItems, setProductItems] = useState(initialData);
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <img
            src={slider1}
            style={{ width: "100%", height: "auto", background: "fit" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slider2}
            style={{ width: "100%", height: "auto", background: "fit" }}
          />
        </SwiperSlide>
      </Swiper>
      <div className="shope-this">
        <button type="submit" className="btn-shope-this">
          SHOPE THIS
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
