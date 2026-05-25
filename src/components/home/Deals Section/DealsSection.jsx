import React from "react";
import "./styles/deals.css";

import DealSlider from "./DealSlider";
import BestSellerSlider from "./BestSellerSlider";

const DealsSection = () => {
  return (
    <section className="deal-section">
      <div className="container">

        <div className="card-wrapper">

          {/* LEFT */}
          <div className="card-box left">

            <div className="slider-header">
              <h4 className="card-heading">
                Deals Hot of The Day
              </h4>

              <div className="custom-navigation">
                <button className="deal-prev">❮</button>
                <button className="deal-next">❯</button>
              </div>
            </div>

            <DealSlider />
          </div>

          {/* RIGHT */}
          <div className="card-box right">

            <div className="slider-header">
              <h4 className="card-heading">
                Top 20 Best Seller
              </h4>

              <div className="custom-navigation">
                <button className="seller-prev">❮</button>
                <button className="seller-next">❯</button>
              </div>
            </div>

            <BestSellerSlider />

          </div>

        </div>

      </div>
    </section>
  );
};

export default DealsSection;