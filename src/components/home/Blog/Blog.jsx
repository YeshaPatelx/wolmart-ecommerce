import React from "react";

import "./styles/blog.css";

import BlogCard from "./BlogCard";

import { blogData } from "../../../data/Blog/blogData";

const Blog = () => {
  return (
    <section className="blog-section">

      <div className="container">

        {/* HEADER */}
        <div className="section-title-wrapper">

          <h2 className="section-title">
            From Our Blog
          </h2>

          <button className="more-btn">
            View All Articles
          </button>

        </div>

        {/* BLOG GRID */}
        <div className="blog-grid">

          {blogData.map((item) => (

            <BlogCard
              key={item.id}
              item={item}
            />

          ))}

        </div>

      </div>

    </section>
  );
};

export default Blog;