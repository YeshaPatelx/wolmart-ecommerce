import { blogData } from "../../data/blogData";
import BlogCard from "./BlogCard";

const POSTS_PER_PAGE = 3;

const BlogGrid = ({ currentPage }) => {
  const start = (currentPage - 1) * POSTS_PER_PAGE;
  const posts = blogData.slice(start, start + POSTS_PER_PAGE);

  return (
    <div className="blog-grid">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogGrid;