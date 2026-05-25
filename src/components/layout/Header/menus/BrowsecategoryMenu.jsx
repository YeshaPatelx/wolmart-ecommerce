import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { browsecategoryMenu } from "../../../../data/menuData";

const BrowsecategoryMenu = () => {
   const [activeCategory, setActiveCategory] = useState(null);

    // Store hovered item position
    const [contentTop, setContentTop] = useState(0);

    const isFurniture = activeCategory?.title === "Furniture";

    // Handle hover and get exact position of hovered item
    const handleMouseEnter = (item, e) => {
        setActiveCategory(item);

        // Get position of hovered li relative to sidebar
        const liTop = e.currentTarget.offsetTop;
        setContentTop(liTop);
    };

    return (
        <div className="nav-dropdown" onMouseLeave={() => setActiveCategory(null)}>
            {/* LEFT CATEGORY SIDEBAR */}
            <div className="browse-category-sidebar">
                <ul>
                    {browsecategoryMenu.map((item, index) => {
                        const Icon = item.icon;
                        const hasSubmenu = item.submenu;

                        return (
                            <li
                                key={index}
                                className={`browsecategory-item ${
                                    activeCategory?.title === item.title
                                        ? "active"
                                        : ""
                                }`}
                                onMouseEnter={(e) =>
                                    handleMouseEnter(item, e)
                                }
                            >
                                <div className="category-left">
                                    {Icon && <Icon />}
                                    <span>{item.title}</span>
                                </div>

                                {hasSubmenu && <FaChevronRight />}
                            </li>
                        );
                    })}
                </ul>

                <div className="view-all-categories">
                    VIEW ALL CATEGORIES <FaChevronRight />
                </div>
            </div>

            {/* RIGHT MEGA MENU CONTENT */}
            {activeCategory?.submenu && (
                <div
                    className={`browse-category-content ${
                        isFurniture ? "furniture-content" : ""
                    }`}
                    style={{ top: `${contentTop}px` }}
                >
                    {isFurniture ? (
                        <>
                            <div className="browse-category-columns furniture-layout">
                                {Object.entries(activeCategory.submenu).map(
                                    ([title, items], index) => (
                                        <div
                                            className="browse-category-column"
                                            key={index}
                                        >
                                            <h4>{title.toUpperCase()}</h4>
                                            <ul>
                                                {items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="furniture-bottom-banners">
                                {activeCategory.bottomBanners?.map(
                                    (banner, index) => (
                                        <div
                                            className="furniture-banner-item"
                                            key={index}
                                        >
                                            <img
                                                src={banner}
                                                alt={`Furniture Banner ${
                                                    index + 1
                                                }`}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="browse-category-columns">
                                {Object.entries(activeCategory.submenu).map(
                                    ([title, items], index) => (
                                        <div
                                            className="browse-category-column"
                                            key={index}
                                        >
                                            <h4>{title.toUpperCase()}</h4>
                                            <ul>
                                                {items.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>

                            {activeCategory.banner && (
                                <div className="browse-category-banner">
                                    <img
                                        src={activeCategory.banner}
                                        alt={`${activeCategory.title} Banner`}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default BrowsecategoryMenu;