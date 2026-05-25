// CategoryBanner.jsx

import React from "react";

const CategoryBanner = ({ item }) => {
  return (
    <div
      className={`category-banner ${item.className}`}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className="category-content">

        <span className="category-subtitle">
          {item.subtitle}
        </span>

        <h2 className="category-title">
          {item.title}

          <span className="category-collection">
            {item.collection}
          </span>
        </h2>



        <p className="category-price">
          {item.priceText} <span>{item.price}</span>
        </p>

      </div>
    </div>
  );
};

export default CategoryBanner;