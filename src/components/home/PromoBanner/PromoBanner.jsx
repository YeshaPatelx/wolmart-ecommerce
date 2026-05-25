import React from "react";

import "./styles/promoBanner.css";

import { promoBannerData } from "../../../data/promoBannerData";

import PromoBannerContent from "./PromoBannerContent";

const PromoBanner = () => {
  return (
    <section className="promo-section">

      <div className="container">

        <div
          className="promo-banner"
          style={{
            backgroundImage: `url(${promoBannerData.image})`,
          }}
        >

          <PromoBannerContent item={promoBannerData} />

        </div>

      </div>

    </section>
  );
};

export default PromoBanner;