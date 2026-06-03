import React from "react";

const BlogPagination = () => {
  return (
    <div className="blog-pagination">
      <button>{"<"}</button>

      <button className="active">
        1
      </button>

      <button>2</button>

      <button>3</button>

      <button>{">"}</button>
    </div>
  );
};

export default BlogPagination;