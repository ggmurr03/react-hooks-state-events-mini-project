import React from "react";

function CategoryFilter({ categories, onChangeCategory, categoryState }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => onChangeCategory(category)}  
          className={category === categoryState ? "selected" : ""}  
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
