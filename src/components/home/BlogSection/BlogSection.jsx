import React from "react";

import "./styles/blogSection.css";

import HomeBlogCard from "./HomeBlogCard";

import { blogData } from "../../../data/blogData";

const BlogSection = () => {
    return (
        <section className="home-blog-section">

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
                <div className="home-blog-grid">

                    {blogData.map((item) => (
                        <HomeBlogCard
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>

            </div>

        </section>
    );
};

export default BlogSection;