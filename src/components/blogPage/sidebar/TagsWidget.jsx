import React from "react";

const TagsWidget = () => {
  const tags = ["Fashion", "Design", "Shop", "Furniture"];

  return (
    <div className="widget">
      <h4>Tags</h4>

      <div className="tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default TagsWidget;