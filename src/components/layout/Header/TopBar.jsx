import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaChevronDown } from "react-icons/fa";

import engFlag from "../../../assets/images/flags/eng.png";
import fraFlag from "../../../assets/images/flags/fra.png";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-wrapper">
          <div className="top-bar-left">
            <span>Welcome to Wolmart Store message or remove it!</span>
          </div>

          <div className="top-bar-right">
            {/* Currency Dropdown */}
            <div className="dropdown">
              <a href="/">
                USD <FaChevronDown />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a href="/">USD</a>
                </li>
                <li>
                  <a href="/">EUR</a>
                </li>
              </ul>
            </div>

            {/* Language Dropdown */}
            <div className="dropdown">
              <a href="/">
                <img src={engFlag} alt="English" />
                ENG
                <FaChevronDown />
              </a>

              <ul className="dropdown-menu">
                <li>
                  <a href="/">
                    <img src={engFlag} alt="English" />
                    ENG
                  </a>
                </li>

                <li>
                  <a href="/">
                    <img src={fraFlag} alt="French" />
                    FRA
                  </a>
                </li>
              </ul>
            </div>

            <div className="link-wrapper">
              <div className="divider"></div>

              <Link to="/blog" className="topbar-link">
                Blog
              </Link>

              <Link to="/contact" className="topbar-link">
                Contact Us
              </Link>

              <Link to="/login" className="topbar-link">
                My Account
              </Link>

              <div className="sign-login-wrapper">
                <Link to="/login" className="icon-wrap topbar-link">
                  <FaUser />
                  Sign In
                </Link>

                <span>/</span>

                <Link to="/register" className="topbar-link">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;