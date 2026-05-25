import React, { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductActions from "./ProductActions";
import ProductSocial from "./ProductSocial";

import {
  dealProducts,
} from "../../../data/dealsData";

const DealSlider = () => {

  const [quantity, setQuantity] =
    useState(1);

  const [openAccordion, setOpenAccordion] =
    useState(null);

  const imageRef = useRef(null);

  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={20}
      navigation={{
        prevEl: ".deal-prev",
        nextEl: ".deal-next",
      }}
    >

      {dealProducts.map((product) => {

        const [mainImage, setMainImage] =
          useState(product.images[0]);

        const [currentIndex, setCurrentIndex] =
          useState(0);

        const handleThumbClick = (img, index) => {
          setMainImage(img);
          setCurrentIndex(index);
        };

        const handlePrevImage = () => {

          const newIndex =
            currentIndex === 0
              ? product.images.length - 1
              : currentIndex - 1;

          setCurrentIndex(newIndex);

          setMainImage(product.images[newIndex]);
        };

        const handleNextImage = () => {

          const newIndex =
            currentIndex === product.images.length - 1
              ? 0
              : currentIndex + 1;

          setCurrentIndex(newIndex);

          setMainImage(product.images[newIndex]);
        };

        const handleMouseMove = (e) => {

          const image = imageRef.current;

          const rect =
            image.getBoundingClientRect();

          const x =
            ((e.clientX - rect.left) /
              rect.width) *
            100;

          const y =
            ((e.clientY - rect.top) /
              rect.height) *
            100;

          image.style.transformOrigin =
            `${x}% ${y}%`;
        };

        return (
          <SwiperSlide key={product.id}>

            <div className="deal-product-wrapper">

              {/* GALLERY */}
              <ProductGallery
                productImages={product.images}
                currentIndex={currentIndex}
                mainImage={mainImage}
                handleThumbClick={handleThumbClick}
                handlePrevImage={handlePrevImage}
                handleNextImage={handleNextImage}
                handleMouseMove={handleMouseMove}
                imageRef={imageRef}
              />

              {/* CONTENT */}
              <div className="deal-content">

                <h2>{product.title}</h2>

              

                <div className="deal-price">
                  {product.price}
                </div>

                <div className="offer">
                  Offer Ends In:
                  <span>{product.offer}</span>
                </div>

                <ProductInfo
                  openAccordion={openAccordion}
                  setOpenAccordion={
                    setOpenAccordion
                  }
                />

            

                <ProductActions
                  quantity={quantity}
                  setQuantity={setQuantity}
                />

                <ProductSocial />

              </div>

            </div>

          </SwiperSlide>
        );
      })}

    </Swiper>
  );
};

export default DealSlider;