import React, { useState } from "react";

import "./styles/popularProducts.css";

import ProductCard from "./ProductCard";

import { popularProducts } from "../../../data/popularProductsData";

const PopularProducts = () => {

  const [activeTab, setActiveTab] =
    useState("new-arrivals");

  const filteredProducts =
    popularProducts.filter(
      (item) => item.category === activeTab,
    );

  return (
    <section className="popular-products">

      <div className="container">

        {/* HEADER */}
        <div className="products-header">

          <div className="section-title-wrapper ">
            <h2 className="section-title ">
              Popular Departments
            </h2>
          </div>


          {/* TABS */}
          <div className="product-tabs">

            <button
              className={
                activeTab === "new-arrivals"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("new-arrivals")
              }
            >
              New Arrivals
            </button>

            <button
              className={
                activeTab === "best-seller"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("best-seller")
              }
            >
              Best Seller
            </button>

            <button
              className={
                activeTab === "most-popular"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("most-popular")
              }
            >
              Most Popular
            </button>

            <button
              className={
                activeTab === "featured"
                  ? "active-tab"
                  : ""
              }
              onClick={() =>
                setActiveTab("featured")
              }
            >
              Featured
            </button>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="products-grid">

          {filteredProducts.map((item) => (

            <ProductCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default PopularProducts;