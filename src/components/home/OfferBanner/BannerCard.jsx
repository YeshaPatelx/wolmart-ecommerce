import React from "react";

import Button from "../../common/Button/Button";

import { commonButtonText } from "../../../data/offerBannerData";

const BannerCard = ({ item }) => {
  return (
    <div
      className={`offer-banner-card banner-${item.id}`}
      style={{
        backgroundImage: `url(${item.image})`,
      }}
    >
      <div className="offer-banner-content">

        <span className="offer-subtitle">
          {item.subtitle}
        </span>

        <h2 className="offer-title">
          {item.title}
        </h2>

        <div className="offer-btn">
          <Button text={commonButtonText} />
        </div>

      </div>
    </div>
  );
};

export default BannerCard;