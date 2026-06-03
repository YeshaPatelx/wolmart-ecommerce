import React from "react";

const BlogCard = ({ post }) => {
  return (
    <div className="blog-card">
      <img src={post.image} alt={post.title} />

      <div className="blog-card-content">
        <span>{post.category}</span>

        <h3>{post.title}</h3>

        <p>{post.excerpt}</p>

        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;