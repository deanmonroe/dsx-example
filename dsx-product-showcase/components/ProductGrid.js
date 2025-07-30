import React from "react";
import ProductCard from "./ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "Wireless headphones with noise cancellation",
    price: 249.99,
    image: "https://via.placeholder.com/300x200?text=Headphones",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 199.99,
    image: "https://via.placeholder.com/300x200?text=Smart+Watch",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    description: "Portable speaker with premium sound quality",
    price: 129.99,
    image: "https://via.placeholder.com/300x200?text=Speaker",
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for improved posture",
    price: 49.99,
    image: "https://via.placeholder.com/300x200?text=Laptop+Stand",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    description: "Precision wireless mouse with long battery life",
    price: 39.99,
    image: "https://via.placeholder.com/300x200?text=Mouse",
  },
  {
    id: 6,
    name: "USB-C Hub",
    description: "Multi-port hub for all your connectivity needs",
    price: 59.99,
    image: "https://via.placeholder.com/300x200?text=USB+Hub",
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;
