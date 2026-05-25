// BlogCard.jsx

import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";

import Button from "../../common/Button/Button";

const BlogCard = ({ item }) => {
  return (
    <div className="blog-card">

      {/* IMAGE */}
      <div className="blog-img-wrap">

        <img
          src={item.image}
          alt={item.title}
          className="blog-img"
        />

      </div>

      {/* CONTENT */}
      <div className="blog-content">

        {/* META */}
        <div className="blog-meta">

          <span className="blog-by">
            by
          </span>

          <span className="blog-author">
            {item.author}
          </span>

          <span className="blog-date">
            - {item.date}
          </span>

        </div>

        {/* TITLE */}
        <h3 className="blog-title">
          {item.title}
        </h3>

        {/* BUTTON */}
        <button className="blog-btn">

          <Button text="Read More" />

        </button>

      </div>

    </div>
  );
};

export default BlogCard;