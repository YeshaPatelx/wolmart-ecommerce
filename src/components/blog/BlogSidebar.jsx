import React from "react";
import { FiSearch } from "react-icons/fi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import PopularPostsSlider from "./PopularPostsSlider";
import { blogData } from "../../data/blogData";

// dynamic categories
const categories = [...new Set(blogData.map((item) => item.category))];

// dynamic tags (fallback using category since no tags field exists)
const tags = [...new Set(blogData.map((item) => item.category))];

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">

      {/* Search */}
      <div className="sidebar-widget">
        <div className="search-box">
          <input type="text" placeholder="Search in Blog..." />
          <button>
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="sidebar-widget">
        <h3>Categories</h3>
        <ul>
          {categories.map((cat, index) => (
            <li key={index}>{cat}</li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="sidebar-widget">
        <div className="slider-header-wrap">
          <h3>Popular Posts</h3>

          <div className="custom-navigation-wrap">
            <button className="popular-prev">
              <FaAngleLeft />
            </button>
            <button className="popular-next">
              <FaAngleRight />
            </button>
          </div>
        </div>

        <PopularPostsSlider />
      </div>

      {/* Custom Block */}
      <div className="sidebar-widget custom-block">
        <h3>Custom Block</h3>
        <p>
          Fringilla urna porttitor rhoncus dolor purus. Luctus venenatis lectus magna fringilla.
        </p>
      </div>

      {/* Tags */}
      <div className="sidebar-widget">
        <h3>Browse Tags</h3>

        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Calendar (static UI) */}
      <div className="sidebar-widget">
        <h3>Calendar</h3>

        <div className="calendar">
          <div className="calendar-month">June 2026</div>

          <div className="calendar-grid">
            <div className="day-name">S</div>
            <div className="day-name">M</div>
            <div className="day-name">T</div>
            <div className="day-name">W</div>
            <div className="day-name">T</div>
            <div className="day-name">F</div>
            <div className="day-name">S</div>

            {/* static dates */}
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        </div>
      </div>

    </aside>
  );
};

export default BlogSidebar;