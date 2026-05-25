import React from "react";

const RecentViewCard = ({ item }) => {
  return (
    <div className="rv-card">

      <div className="rv-img-wrap">

        <img
          src={item.image}
          alt={item.title}
          className="rv-img"
        />

        <div className="rv-overlay">

          <h3 className="rv-product-title">
            {item.title}
          </h3>

        </div>

      </div>

    </div>
  );
};

export default RecentViewCard;