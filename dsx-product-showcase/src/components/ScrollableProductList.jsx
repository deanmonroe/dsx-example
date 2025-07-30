import React from "react";
import { HorizontalScrollable, Text } from "@dsx/react";

// Sample product data for demonstration
const sampleProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 249.99,
    image:
      "https://media.istockphoto.com/id/1087256248/photo/wireless-headphone-on-laptop.jpg?s=612x612&w=0&k=20&c=sLa4RWqgf4UaRHnzD41VPClpQx240zgnNP2PZWabRBw=",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 129.99,
    image:
      "https://media.istockphoto.com/id/1335374517/vector/black-bluetooth-speaker-with-power-blue-lead-on-white-background-eps10-vector-illusration.jpg?s=612x612&w=0&k=20&c=FJHzQf24mszeen0xJJz_NQdrm89sGau_CiYJM-_-y9o=",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image:
      "https://media.istockphoto.com/id/1438573840/vector/fitness-tracker-display-smart-watch-interface.jpg?s=612x612&w=0&k=20&c=eFX4n8E8M_f3-xsqhRkdyThCNdE0EI372GYiYF2oN5Y=",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://media.istockphoto.com/id/1125614863/photo/the-laptop-is-open-and-mounted-on-a-cooling-stand.jpg?s=612x612&w=0&k=20&c=YY9gxEYpezjq38BZx27xwf1ddBKWKPcAOVqnmODJ774=",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 39.99,
    image:
      "https://media.istockphoto.com/id/1458492520/photo/black-wireless-computer-mouse-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hLFS1ukv567H6S-7NjQzvVxNKb7qPkvIKbXkT7Sd2r8=",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 149.99,
    image:
      "https://media.istockphoto.com/id/1356366044/photo/black-mechanical-keyboard-on-white-background-blue-neon-light.jpg?s=612x612&w=0&k=20&c=GhpZsK36fsuoSP-4-pR7ma9UeIApatkBq6M-bnXFf1c=",
  },
];

const ScrollableProductList = ({
  title,
  products = sampleProducts,
  onProductClick,
}) => {
  return (
    <div style={{ margin: "var(--size-600) 0" }}>
      <Text variant="headline-3" style={{ marginBottom: "var(--size-400)" }}>
        {title || "Featured Products"}
      </Text>

      <HorizontalScrollable>
        <div
          style={{
            display: "flex",
            gap: "var(--size-400)",
            padding: "var(--size-200) 0",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                minWidth: "200px",
                padding: "var(--size-300)",
                border: "1px solid var(--color-neutral-200)",
                borderRadius: "var(--border-radius-default)",
                cursor: "pointer",
              }}
              onClick={() => onProductClick && onProductClick(product)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "var(--size-200)",
                }}
              />
              <Text variant="body-bold">{product.name}</Text>
              <Text variant="body">${product.price.toFixed(2)}</Text>
            </div>
          ))}
        </div>
      </HorizontalScrollable>
    </div>
  );
};

// Specialized scrollable components
export const RelatedProductsScroll = ({ products, onProductClick }) => (
  <ScrollableProductList
    title="Related Products"
    products={products}
    onProductClick={onProductClick}
  />
);

export const RecentlyViewedScroll = ({ products, onProductClick }) => (
  <ScrollableProductList
    title="Recently Viewed"
    products={products}
    onProductClick={onProductClick}
  />
);

export const TopSellingScroll = ({ products, onProductClick }) => (
  <ScrollableProductList
    title="Top Selling Products"
    products={products}
    onProductClick={onProductClick}
  />
);

export default ScrollableProductList;
