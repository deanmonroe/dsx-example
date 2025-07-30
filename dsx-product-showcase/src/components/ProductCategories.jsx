import React from "react";
import { Pill } from "@dsx/react";

// Sample categories data
const categories = [
  { id: 1, name: "Electronics", color: "color-primary" },
  { id: 2, name: "Audio", color: "color-accent" },
  { id: 3, name: "Accessories", color: "color-info" },
  { id: 4, name: "Office", color: "color-success" },
  { id: 5, name: "Gadgets", color: "color-highlight" },
  { id: 6, name: "Computers", color: "color-primary-alt" },
];

const ProductCategories = ({ onSelectCategory, selectedCategory }) => {
  return (
    <div className="product-categories">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--size-200)",
          marginBottom: "var(--size-400)",
        }}
      >
        {categories.map((category) => (
          <Pill
            key={category.id}
            color={category.color}
            onClick={() => onSelectCategory(category.id)}
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedCategory === category.id
                  ? `var(--${category.color}-100)`
                  : undefined,
            }}
          >
            {category.name}
          </Pill>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
