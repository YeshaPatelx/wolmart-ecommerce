import React from "react";
import { footerLinks } from "../../../data/FooterData";
import "./styles/Footer.css";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterestP,
} from "react-icons/fa";
const FooterTop = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-container">
          {/* Footer Logo & Contact Info */}
          <div className="footer-box footer-about">
            <div className="footer-logo">

              <a href="/">
                <img alt="Wolmart Logo" src="/src/assets/images/logo/logo.png" />
              </a>
            </div>

            <div className="footer-contact">
              <p className="footer-text">
                Got Question? Call us 24/7
              </p>

              <h3 className="footer-phone">
                1-800-570-7777
              </h3>

              <p className="footer-text">
                Register now to get updates on pronot get up icons & coupons ster now toon.
              </p>


              <div className="footer-social">
                <a href="#" className="footer-social-link facebook">
                  <FaFacebookF />
                </a>

                <a href="#" className="footer-social-link twitter">
                  <FaTwitter />
                </a>

                <a href="#" className="footer-social-link instagram">
                  <FaInstagram />
                </a>

                <a href="#" className="footer-social-link youtube">
                  <FaYoutube />
                </a>

                <a href="#" className="footer-social-link pinterest">
                  <FaPinterestP />
                </a>
              </div>

            </div>
          </div>

          {/* Footer Link Columns */}
          {footerLinks.map((item, index) => (
            <div className="footer-box" key={index}>
              <h4 className="footer-title">
                {item.title}
              </h4>

              <ul className="footer-links">
                {item.submenu.map((subItem, i) => (
                  <li
                    className="footer-links-item"
                    key={i}
                  >
                    <a
                      href="#"
                      className="footer-link"
                    >
                      {subItem}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


      </div>
    </footer>
  );
};

export default FooterTop;