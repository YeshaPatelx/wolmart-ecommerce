import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import BannerSlide from "./BannerSlide";

import { bannerData } from "../../../data/bannerData";

import { bannerSwiperConfig } from "./swiperConfig";

import "./styles/banner.css";

const HeroBanner = () => {
  return (
    <section className="hero-banner">

      <Swiper
        modules={[Autoplay, Pagination]}
        {...bannerSwiperConfig}
      >

        {bannerData.map((item) => (
          <SwiperSlide key={item.id}>
            <BannerSlide item={item} />
          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
};

export default HeroBanner;