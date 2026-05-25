import React from "react";
import "./styles/Footer.css";
import { footerTagsData } from "../../../data/FooterData";
import paymentImg from "../../../../src/assets/images/footer/payment.png";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">

      <div className="container">

        {/* FOOTER TAGS */}
        <div className="footer-tags">

          {footerTagsData.map((section, index) => (
            <div className="footer-tag-row" key={index}>

              <h4>{section.title}</h4>

              <div className="footer-links">

                {section.links.map((link, i) => (
                  <a href="#" key={i}>
                    {link}
                  </a>
                ))}

              </div>

            </div>
          ))}

        </div>

        {/* COPYRIGHT */}
        <div className="footer-copyright">

          <p>
            Copyright © 2021 Wolmart Store. All Rights Reserved.
          </p>

          <div className="payment-methods">

            <span>We're using safe payment for</span>

           <img src={paymentImg} alt="payment methods" />

          </div>

        </div>

      </div>

    </div>
  );
};

export default FooterBottom;