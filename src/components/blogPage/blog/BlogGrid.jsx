import React from "react";
import BlogCard from "./BlogCard";
import blogPosts from "../../../data/Blog/blogPosts";

const BlogGrid = () => {
  return (
    <div className="blog-grid">
      {blogPosts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;