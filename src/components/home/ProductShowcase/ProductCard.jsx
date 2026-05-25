// ProductCard.jsx

import React from "react";

import { LuShoppingCart, LuHeart, LuSearch, LuScale } from "react-icons/lu";

import { FaStar } from "react-icons/fa";

const ProductCard = ({ item }) => {
    return (
        <div className="ps-card">

            {/* IMAGE */}
            <div className="ps-img-wrap">

                <img
                    src={item.image}
                    alt={item.title}
                    className="ps-img"
                />

                {/* DISCOUNT */}
                {item.discount && (
                    <span className="ps-discount">
                        {item.discount}
                    </span>
                )}

                {/* ICONS */}
                <div className="ps-icons">

                    <button className="ps-icon-btn">
                        <LuShoppingCart />
                    </button>

                    <button className="ps-icon-btn">
                        <LuHeart />
                    </button>

                    <button className="ps-icon-btn">
                        <LuSearch />
                    </button>

                    <button className="ps-icon-btn">
                        <LuScale />
                    </button>

                </div>



            </div>

            {/* CONTENT */}
            <div className="ps-content">

                <h3 className="ps-product-title">
                    {item.title}
                </h3>

                {/* RATING */}
                <div className="ps-rating">

                    <div className="ps-stars">

                        <FaStar className="ps-star" />
                        <FaStar className="ps-star" />
                        <FaStar className="ps-star" />
                        <FaStar className="ps-star" />
                        <FaStar className="ps-star ps-star-gray" />

                    </div>

                    <span className="ps-reviews">
                        ({item.reviews} Reviews)
                    </span>

                </div>

                {/* PRICE */}
                <div className="ps-price">

                    <span className="ps-new-price">
                        {item.price}
                    </span>

                    <span className="ps-old-price">
                        {item.oldPrice}
                    </span>

                </div>

            </div>

        </div>
    );
};

export default ProductCard;