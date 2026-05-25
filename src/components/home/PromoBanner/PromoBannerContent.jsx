import React from "react";

import { FaArrowRight } from "react-icons/fa6";
import Button from "../../common/Button/Button";

const PromoBannerContent = ({ item }) => {
  return (
    <div className="promo-content">

      {/* LEFT */}
      <div className="promo-left">

        <h2 className="promo-discount">
          {item.discount}

          <span>
            {item.offText}
          </span>
        </h2>

      </div>

      {/* CENTER */}
      <div className="promo-center">

        <h2 className="promo-title">
          {item.title}
        </h2>

        <p className="promo-description">

          {item.description}

          <span className="promo-code">
            {item.code}
          </span>

          {item.subDescription}

        </p>

      </div>

      {/* RIGHT */}
      <div className="promo-right">

        <div className="promo-btn">

        <Button text={item.buttonText} />

        </div>

      </div>

    </div>
  );
};

export default PromoBannerContent;