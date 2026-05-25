import React from "react";

import Button from "../../common/Button/Button";

const BannerSlide = ({ item }) => {
  return (
    <div
      className={`banner-slide ${item.className}`}
      style={{
        backgroundImage: `url(${item.bgImage})`,
      }}
    >
      <div className="container">

        <div className="banner-wrapper">

          {/* PRODUCT IMAGE */}
          <div className="banner-product-image">
            <img
              src={item.productImage}
              alt={item.title}
            />
          </div>

          {/* CONTENT */}
          <div className="banner-content">

            <span className="banner-subtitle">
              {item.subtitle}
            </span>

            <h2 className="banner-title">
              {item.title}
            </h2>

            <h1 className="banner-highlight">
              {item.highlight}
            </h1>


             <Button text={item.buttonText} />

          </div>

        </div>

      </div>
    </div>
  );
};

export default BannerSlide;