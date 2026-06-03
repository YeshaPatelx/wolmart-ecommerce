import React from "react";
import blogPosts from "../../../data/Blog/blogPosts";

const PopularPostsWidget = () => {
  return (
    <div className="widget">
      <h4>Popular Posts</h4>

      {blogPosts.slice(0, 3).map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default PopularPostsWidget;