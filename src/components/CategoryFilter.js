import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="categories">
      {categories.map(category => (
        <button
          key={category} // Key prop is the category name
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategorySelect(category)} // Pass the selected category to the callback
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
