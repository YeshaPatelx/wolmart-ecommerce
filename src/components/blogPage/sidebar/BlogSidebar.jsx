import React from "react";
import SearchWidget from "./SearchWidget";
import CategoriesWidget from "./CategoriesWidget";
import PopularPostsWidget from "./PopularPostsWidget";
import TagsWidget from "./TagsWidget";

const BlogSidebar = () => {
  return (
    <div className="blog-sidebar">
      <SearchWidget />
      <CategoriesWidget />
      <PopularPostsWidget />
      <TagsWidget />
    </div>
  );
};

export default BlogSidebar;