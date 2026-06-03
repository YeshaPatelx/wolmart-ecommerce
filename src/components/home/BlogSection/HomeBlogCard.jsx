// HomeBlogCard.jsx

import React from "react";



import Button from "../../common/Button/Button";

const HomeBlogCard = ({ item }) => {
  return (
    <div className="home-blog-card">

      {/* IMAGE */}
      <div className="home-blog-img-wrap">

        <img
          src={item.image}
          alt={item.title}
          className="home-blog-img"
        />

      </div>

      {/* CONTENT */}
      <div className="home-blog-content">

        {/* META */}
        <div className="home-blog-meta">

          <span className="home-blog-byy">
            by
          </span>

          <span className="home-blog-author">
            {item.author}
          </span>

          <span className="home-blog-date">
            - {item.date}
          </span>

        </div>

        {/* TITLE */}
        <h3 className="home-blog-title ">
          {item.title}
        </h3>

        {/* BUTTON */}
        <div className="home-blog-btn">
          <Button text="Read More" />
        </div>

      </div>

    </div>
  );
};

export default HomeBlogCard;