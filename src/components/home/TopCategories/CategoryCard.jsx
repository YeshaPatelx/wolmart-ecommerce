import React from "react";

const CategoryCard = ({ item }) => {
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="top-category-content">
        <h3 className="top-category-title">{item.title}</h3>

        <button className="shop-btn">Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryCard;
