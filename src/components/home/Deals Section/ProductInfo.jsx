import React from "react";

import { FaStar } from "react-icons/fa";

import { sizesData } from "../../../data/dealsData";

const ProductInfo = ({
  openAccordion,
  setOpenAccordion,
}) => {
  return (
    <>
      <div className="rating">

        <div className="product-rating">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star gray" />
        </div>

        <div className="reviews">
          (3 Reviews)
        </div>

      </div>

      {/* SIZE */}
      <div className="sizes">

        <h4>Size:</h4>

        {sizesData.map((item, index) => (

          <button
            key={index}
            className={`size-btn ${
              openAccordion === item.size
                ? "active-size"
                : ""
            }`}
            onClick={() =>
              setOpenAccordion(item.size)
            }
          >
            {item.size}
          </button>

        ))}

      </div>

      {/* ACCORDION */}
      {sizesData.map(
        (item, index) =>
          openAccordion === item.size && (

            <div
              className="size-accordion"
              key={index}
            >

              <button className="clean-btn">
                Clean All
              </button>

              <h3>{item.price}</h3>

            </div>

          ),
      )}
    </>
  );
};

export default ProductInfo;