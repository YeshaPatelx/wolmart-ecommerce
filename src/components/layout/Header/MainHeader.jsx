import React, { useState } from "react";
import logo from "../../../assets/images/logo/logo.png";

import {
  FiHeart,
  FiRepeat,
  FiShoppingCart,
  FiPhoneCall,
} from "react-icons/fi";

import {
  FaSearch,
  FaChevronDown,
  FaBars,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

import { browsecategoryMenu } from "../../../data/menuData";
import { searchCategories } from "../../../data/searchCategories";

const MainHeader = () => {


  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");



  const [showDropdown, setShowDropdown] =
    useState(false);

  const [showSidebar, setShowSidebar] =
    useState(false);

  const [activeTab, setActiveTab] =
    useState("menu");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };

  return (
    <div className="main-header">
      <div className="container">

        {/* HEADER */}
        <div className="main-header-wrapper">

          {/* LOGO */}
          <div className="header-logo">

            <div
              className="mobile-menu-icon"
              onClick={() => setShowSidebar(true)}
            >
              <FaBars />
            </div>

            <a href="/">
              <img src={logo} alt="Wolmart Logo" />
            </a>

          </div>

          {/* SEARCH */}
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="header-search">

              <div className="category-dropdown">

                <button
                  type="button"
                  className="category-dropdown-toggle"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <span>{selectedCategory}</span>

                  <FaChevronDown
                    className={`category-dropdown-icon ${showDropdown ? "rotate" : ""
                      }`}
                  />
                </button>

                {showDropdown && (
                  <ul className="category-dropdown-menu">

                    {searchCategories.map((category, index) => (
                      <li
                        key={index}
                        onClick={() =>
                          handleCategorySelect(category)
                        }
                      >
                        {category}
                      </li>
                    ))}

                  </ul>
                )}

              </div>

              <input
                type="text"
                className="input-field"
                placeholder="Search in..."
              />

              <FaSearch className="search-icon" />

            </div>
          </form>

          {/* RIGHT */}
          <div className="header-right">

            <div className="header-call">

              <a href="#" className="header-call-link">

                <FiPhoneCall className="call-icon" />

                <div className="call-content">

                  <h4 className="data">
                    <a href="#">Live Chat</a>
                    or
                  </h4>

                  <a href="#">0(800)123-456</a>

                </div>

              </a>

            </div>

            <div className="actions-btns-wrapper">

              <a href="#" className="action-item call-wrap">
                <FiPhoneCall className="call-icon icon" />
              </a>

              <a href="#" className="action-item wishlist-wrap">
                <FiHeart className="wishlist-icon icon" />
                <span>Wishlist</span>
              </a>

              <a href="#" className="action-item compare-wrap">
                <FiRepeat className="compare-icon icon" />
                <span>Compare</span>
              </a>

              <a href="#" className="action-item cart-wrap">
                <FiShoppingCart className="cart-icon icon" />
                <span>Cart</span>
              </a>

            </div>

          </div>

        </div>

        {/* OVERLAY */}
        <div
          className={`mobile-overlay ${showSidebar ? "active" : ""
            }`}
          onClick={() => setShowSidebar(false)}
        />


        {/* CLOSE */}
        {showSidebar && (
          <button
            className="mobile-close"
            onClick={() => setShowSidebar(false)}
          >
            <FaTimes />
          </button>
        )}


        {/* SIDEBAR */}
        <div
          className={`mobile-sidebar ${showSidebar ? "active" : ""
            }`}
        >


          {/* SEARCH */}
          <div className="mobile-search">

            <input
              type="text"
              placeholder="Search"
            />

            <FaSearch />

          </div>

          {/* TABS */}
          <div className="sidenav-tab">

            <button
              className={
                activeTab === "menu"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("menu")
              }
            >
              Main Menu
            </button>

            <button
              className={
                activeTab === "category"
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveTab("category")
              }
            >
              Categories
            </button>

          </div>

          {/* CONTENT */}
          <div className="sidenav-tabcontent">

            {activeTab === "menu" && (
              <ul className="sidebar-menu">


                <li onClick={() => setShowSidebar(false)}>
                  <span>Home</span>
                  <FaChevronRight />
                </li>

                <li onClick={() => setShowSidebar(false)}>
                  <span>Shop</span>
                  <FaChevronRight />
                </li>

                <li onClick={() => setShowSidebar(false)}>
                  <span>Vendor</span>
                  <FaChevronRight />
                </li>

                <li onClick={() => setShowSidebar(false)}>
                  <span>Blog</span>
                  <FaChevronRight />
                </li>

                <li onClick={() => setShowSidebar(false)}>
                  <span>Pages</span>
                  <FaChevronRight />
                </li>

                <li onClick={() => setShowSidebar(false)}>
                  <span>Elements</span>
                  <FaChevronRight />
                </li>
              </ul>
            )}

            {activeTab === "category" && (
              <div className="browse-category-sidebar">
                <ul>
                  {browsecategoryMenu.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={index}
                        className="browsecategory-item"
                      >
                        <div className="category-left">
                          {Icon && <Icon />}
                          <span>{item.title}</span>
                        </div>

                        {item.submenu && (
                          <FaChevronRight />
                        )}
                      </li>
                    );
                  })}
                </ul>

                <div className="view-all-categories">
                  VIEW ALL CATEGORIES
                  <FaChevronRight />
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};

export default MainHeader;