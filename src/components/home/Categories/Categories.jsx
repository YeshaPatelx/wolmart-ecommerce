// Categories.jsx

import React from "react";

import { categoryData } from "../../../data/categoryData";

import CategoryBanner from "./CategoryBanner";

import "./styles/categories.css";

const Categories = () => {
  return (
    <section className="categories-section">

      <div className="container">

        <div className="categories-wrapper">

          {categoryData.map((item) => (
            <CategoryBanner
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Categories;