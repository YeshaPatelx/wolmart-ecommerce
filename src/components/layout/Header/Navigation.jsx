import React, { useEffect, useState } from "react";
import { FaBars, FaChevronDown } from "react-icons/fa";
import { FiMapPin, FiTag } from "react-icons/fi";

import MegaMenu from "./menus/MegaMenu";
import VendorMenu from "./menus/VendorMenu";
import BlogMenu from "./menus/BlogMenu";
import PagesMenu from "./menus/PagesMenu";
import ElementsMenu from "./menus/ElementsMenu";
import BrowsecategoryMenu from "./menus/BrowsecategoryMenu";

import "./styles/menu.css";

const Navigation = () => {

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <nav className={`navigation ${isSticky ? "sticky-nav" : ""}`}>

      <div className="container nav-wrapper">

        <div className="left-navbar">

          {/* Left Category Button */}

          <div
            className={`dropdown-wrapper browse-category ${!isSticky ? "default-open-category" : ""
              }`}
          >

            <a href="#">
              <FaBars />
              <p>BROWSE CATEGORIES</p>
              <FaChevronDown />
            </a>

            <BrowsecategoryMenu />

          </div>

          {/* Menu */}

          <ul className="nav-links">

            <li className="active header-menu">
              <a href="#">Home</a>
            </li>

            {/* SHOP MEGA MENU */}

            <li className="dropdown-wrapper header-menu">

              <a href="#">
                Shop <FaChevronDown />
              </a>

              <MegaMenu />

            </li>

            <li className="dropdown-wrapper header-menu">

              <a href="#">
                Vendor <FaChevronDown />
              </a>

              <VendorMenu />

            </li>

            <li className="dropdown-wrapper header-menu">

              <a href="#">
                Blog <FaChevronDown />
              </a>

              <BlogMenu />

            </li>

            <li className="dropdown-wrapper header-menu">

              <a href="#">
                Pages <FaChevronDown />
              </a>

              <PagesMenu />

            </li>

            <li className="dropdown-wrapper header-menu">

              <a href="#">
                Elements <FaChevronDown />
              </a>

              <ElementsMenu />

            </li>

          </ul>

        </div>

        {/* Right Side */}

        <div className="nav-right">

          <a href="#" className="track-location" >
            <FiMapPin className="location-icon" />
            Track Order
          </a>

          <a href="#" className="deal-daily" >
            <FiTag className="deal-icon" />
            Daily Deals
          </a>

        </div>

      </div>

    </nav>
  );
};

export default Navigation;