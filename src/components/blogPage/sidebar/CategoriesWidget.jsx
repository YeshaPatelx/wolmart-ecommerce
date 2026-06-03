import React from "react";

const CategoriesWidget = () => {
  const categories = [
    "Fashion",
    "Furniture",
    "Electronics",
    "Lifestyle",
  ];

  return (
    <div className="widget">
      <h4>Categories</h4>

      <ul>
        {categories.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesWidget;