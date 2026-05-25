import React from "react";

import "./styles/topCategories.css";

import CategoryCard from "./CategoryCard";

import { topCategories } from "../../../data/topCategoriesData";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const TopCategories = () => {
  return (
    <section className="top-categories">

      <div className="container">

        <div className="section-title-wrapper ">
          <h2 className="section-title ">
            Top Categories Of The Month
          </h2>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={6}
          navigation={false}
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
          }}
        >

          {topCategories.map((item) => (

            <SwiperSlide key={item.id}>

              <CategoryCard item={item} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default TopCategories;