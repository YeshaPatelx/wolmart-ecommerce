import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { featureData } from "../../../data/featureData";

import FeatureCard from "./FeatureCard";

import "./styles/features.css";

const Features = () => {
  return (
    <section className="features-section">

      <div className="container">

    <div className="features-wrapper">

        <Swiper
          slidesPerView={4}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },

            576: {
              slidesPerView: 2,
            },

            992: {
              slidesPerView: 4,
            },
          }}
        >
          {featureData.map((item) => (
            <SwiperSlide key={item.id}>
              <FeatureCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>

      </div>

    </section>
  );
};

export default Features;