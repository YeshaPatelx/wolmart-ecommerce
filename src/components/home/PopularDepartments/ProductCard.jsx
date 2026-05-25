import React from "react";

import { LuShoppingCart, LuHeart, LuSearch, LuScale } from "react-icons/lu";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      {/* ACTION ICONS */}
      <div className="product-actions">
        <button>
          <LuShoppingCart />
        </button>

        <button>
          <LuHeart />
        </button>

        <button>
          <LuSearch />
        </button>

        <button>
          <LuScale />
        </button>
      </div>

      {/* IMAGE */}
      <div className="product-image">
        {item.discount && (
          <span className="product-label">{item.discount}</span>
        )}
        <img src={item.image} alt="" />
      </div>

      {/* CONTENT */}
      <div className="product-content">
        <h3>{item.title}</h3>

        {/* RATING */}
        <div className="rating-wrapper">
          <div className="product-rating">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar className="gray" />
          </div>

          <span className="reviews">({item.reviews} Reviews)</span>
        </div>

        <div className="products-price">{item.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
