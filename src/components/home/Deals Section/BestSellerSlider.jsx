import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaStar } from "react-icons/fa";

import { bestSellerProducts } from "../../../data/bestSellerData";

const BestSellerSlider = () => {
  // 3 product per slide
  const groupedProducts = [];

  for (let i = 0; i < bestSellerProducts.length; i += 3) {
    groupedProducts.push(
      bestSellerProducts.slice(i, i + 3)
    );
  }

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={20}
      navigation={{
        prevEl: ".seller-prev",
        nextEl: ".seller-next",
      }}
    >
      {groupedProducts.map((group, index) => (
        <SwiperSlide key={index}>

          {/* MAIN COLUMN */}
          <div className="seller-column">

            {group.map((product) => (
              <div className="product" key={product.id}>

                <div className="product-img">
                  <img src={product.image} alt="" />
                </div>

                <div className="product-info">

                  <h3>{product.title}</h3>

                  <div className="product-rating">
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star" />
                    <FaStar className="star gray" />
                  </div>

                  <div className="product-price">
                    <span className="new-price">
                      {product.price}
                    </span>
                  </div>

                </div>

              </div>
            ))}

          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BestSellerSlider;