import React from "react";


import '../components/blogPage/styles/blog.css';
import BlogGrid from "../components/blogPage/blog/BlogGrid";
import BlogSidebar from "../components/blogPage/sidebar/BlogSidebar";
import BlogHero from "../components/blogPage/blog/BlogHero";

const Blog = () => {
  return (
    <>
    <BlogHero/>
    <section className="blog-page">
      <div className="container">

        <h1>Blog</h1>

        <div className="blog-layout">
          <div className="blog-content">
            <BlogGrid/>
          </div>

          <div className="sidebar-area">
            <BlogSidebar/>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default Blog;