// RecentViews.jsx

import React from "react";

import "./styles/recentViews.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { recentViewsData } from "../../../data/recentViewsData";

import RecentViewCard from "./RecentViewCard";

const RecentViews = () => {
  return (
    <section className="rv-section">

      <div className="container">

        {/* HEADER */}
        <div className="section-title-wrapper">

          <h2 className="section-title">
            Your Recent Views
          </h2>

        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={8}
          navigation={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },

            576: {
              slidesPerView: 3,
            },

            768: {
              slidesPerView: 4,
            },

            992: {
              slidesPerView: 6,
            },

            1200: {
              slidesPerView: 8,
            },
          }}
        >

          {recentViewsData.map((item) => (

            <SwiperSlide key={item.id}>

              <RecentViewCard item={item} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default RecentViews;