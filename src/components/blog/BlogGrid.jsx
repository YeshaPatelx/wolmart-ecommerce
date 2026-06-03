import React from "react";
import BlogCard from "./BlogCard";
import { blogData } from "../../data/blogData";

const BlogGrid = () => {
  return (
    <div className="blog-grid">
      {blogData.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default BlogGrid;