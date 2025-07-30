import React from "react";
import { HorizontalScrollable, Text } from "@dsx/react";

// Sample product data for demonstration
const sampleProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    price: 249.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Headphones",
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 129.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Speaker",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Watch",
  },
  {
    id: 4,
    name: "Laptop Stand",
    price: 49.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Stand",
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 39.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Mouse",
  },
  {
    id: 6,
    name: "Mechanical Keyboard",
    price: 149.99,
    image: "https://placehold.co/200x200/e2e8f0/1e293b?text=Keyboard",
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
