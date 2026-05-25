import React from "react";

import "./styles/offerBanner.css";

import BannerCard from "./BannerCard";

import { offerBannerData } from "../../../data/offerBannerData";

const OfferBanner = () => {
  return (
    <section className="offer-banner-section">

      <div className="container">

        <div className="offer-banner-wrapper">

          {offerBannerData.map((item) => (

            <BannerCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default OfferBanner;