// ProductShowcase.jsx

import React from "react";

import "./styles/productShowcase.css";
import { FaArrowRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

import {
    clothingProducts,
    showcaseBanner,
} from "../../../data/productShowcaseData";
import Button from "../../common/Button/Button";
import { commonButtonText } from "../../../data/offerBannerData";

const ProductShowcase = () => {
    return (
        <section className="ps-section">

            <div className="container">

                {/* HEADER */}
                <div className="section-title-wrapper">

                    <h2 className="section-title">
                        Clothing & Apparel
                    </h2>

                    <button className="more-btn">
                        More Products
                          <FaArrowRight />
                    </button>

                </div>

                {/* BANNER + PRODUCTS */}
                <div className="ps-banner">

                    {/* LEFT BANNER */}
                    <div className="left">

                        <img
                            src={showcaseBanner.image}
                            alt={showcaseBanner.title}
                        />

                        <div className="ps-banner-content white">

                            <span className="ps-banner-subtitle">
                                {showcaseBanner.subtitle}
                            </span>

                            <h2 className="ps-banner-title">

                                {showcaseBanner.title}

                                <span>
                                    {showcaseBanner.highlight}
                                </span>

                            </h2>

                            <button className="ps-banner-btn">

                                <Button
                                    className="custom-btn"
                                    text={showcaseBanner.buttonText}
                                />

                            </button>

                        </div>

                    </div>

                    {/* RIGHT PRODUCTS */}
                    <div className="right ps-grid">

                        {clothingProducts.map((item) => (

                            <ProductCard
                                key={item.id}
                                item={item}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProductShowcase;