import React from "react";

const BlogCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="blog-card">
      <div className="blog-img-wrap">
    <img src={post.image} alt={post.title} />
  </div>

      <div className="blog-card-content">
       {/* CATEGORY */}
        <span className="blog-category">
          {post.category}
        </span>

        {/* TITLE */}
        <h3 className="blog-title">
          {post.title}
        </h3>

        <p className="blog-excerpt">{post.excerpt} <button>(Read More)</button></p>

        

         {/* META */}
        <div className="blog-meta">
          <span className="blog-by">by</span>

          <span className="blog-author">
            {post.author}
          </span>

          <span className="blog-date">
            - {post.date}
          </span>
        </div>

      </div>
    </div>
  );
};

export default BlogCard;