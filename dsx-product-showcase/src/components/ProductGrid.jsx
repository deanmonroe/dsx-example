import React from "react";
import ProductCard from "./ProductCard";

// Sample product data
const products = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "Wireless headphones with noise cancellation",
    price: 249.99,
    image:
      "https://media.istockphoto.com/id/1087256248/photo/wireless-headphone-on-laptop.jpg?s=612x612&w=0&k=20&c=sLa4RWqgf4UaRHnzD41VPClpQx240zgnNP2PZWabRBw=",
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 199.99,
    image:
      "https://media.istockphoto.com/id/1438573840/vector/fitness-tracker-display-smart-watch-interface.jpg?s=612x612&w=0&k=20&c=eFX4n8E8M_f3-xsqhRkdyThCNdE0EI372GYiYF2oN5Y=",
  },
  {
    id: 3,
    name: "Wireless Speaker",
    description: "Portable speaker with premium sound quality",
    price: 129.99,
    image:
      "https://media.istockphoto.com/id/1335374517/vector/black-bluetooth-speaker-with-power-blue-lead-on-white-background-eps10-vector-illusration.jpg?s=612x612&w=0&k=20&c=FJHzQf24mszeen0xJJz_NQdrm89sGau_CiYJM-_-y9o=",
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for improved posture",
    price: 49.99,
    image:
      "https://media.istockphoto.com/id/1125614863/photo/the-laptop-is-open-and-mounted-on-a-cooling-stand.jpg?s=612x612&w=0&k=20&c=YY9gxEYpezjq38BZx27xwf1ddBKWKPcAOVqnmODJ774=",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    description: "Precision wireless mouse with long battery life",
    price: 39.99,
    image:
      "https://media.istockphoto.com/id/1458492520/photo/black-wireless-computer-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hLFS1ukv567H6S-7NjQzvVxNKb7qPkvIKbXkT7Sd2r8=",
  },
  {
    id: 6,
    name: "USB-C Hub",
    description: "Multi-port hub for all your connectivity needs",
    price: 59.99,
    image:
      "https://media.istockphoto.com/id/1356366044/photo/black-mechanical-keyboard-on-white-background-blue-neon-light.jpg?s=612x612&w=0&k=20&c=GhpZsK36fsuoSP-4-pR7ma9UeIApatkBq6M-bnXFf1c=",
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
