import { useState } from "react";
import PageBanner from "../components/common/PageBanner/PageBanner";
import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogPagination from "../components/blog/BlogPagination";
import "../components/blog/styles/blog.css";
import Breadcrumb from "../components/common/Breadcrumb/Breadcrumb";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <PageBanner title="Classic" />

      <div className="container">
        <Breadcrumb
          title="Classic"
          items={[
            { label: "Blog", link: "/blog" },
            { label: "Classic" }
          ]}
        />
        <div className="blog-layout">
          <div className="blog-main">
            <BlogGrid currentPage={currentPage} />
            <BlogPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

          <BlogSidebar />
        </div>
      </div>
    </>
  );
};

export default Blog;