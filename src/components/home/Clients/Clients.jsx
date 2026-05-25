// Clients.jsx

import React from "react";

import "./styles/clients.css";

import { clientData } from "../../../data/clientData";

import ClientCard from "./ClientCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

const Clients = () => {
  return (
    <section className="clients-section">

      <div className="container">

        {/* HEADER */}
        <div className="section-title-wrapper">

          <h2 className="section-title">
            Our Clients
          </h2>

        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Autoplay, Grid]}
          spaceBetween={0}
          slidesPerView={6}
          loop={true}
          grid={{
            rows: 2,
            fill: "row",
          }}
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
              slidesPerView: 5,
            },

            1200: {
              slidesPerView: 6,
            },
          }}
        >

          {clientData.map((item) => (

            <SwiperSlide key={item.id}>

              <ClientCard item={item} />

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Clients;