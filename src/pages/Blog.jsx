import BlogGrid from "../components/blog/BlogGrid";
import BlogSidebar from "../components/blog/BlogSidebar";
import BlogPagination from "../components/blog/BlogPagination";
import PageBanner from "../components/common/PageBanner/PageBanner";
import "../components/blog/styles/blog.css";
const Blog = () => {
  return (
    <>
      <PageBanner title="Classic" />

      <div className="container">
        <div className="blog-layout">
          <div className="blog-main">
            <BlogGrid />
            <BlogPagination />
          </div>

          <BlogSidebar />
        </div>
      </div>
    </>
  );
};

export default Blog;