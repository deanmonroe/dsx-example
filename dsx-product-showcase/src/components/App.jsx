import React, { useState } from "react";
import { NavBar, MainNav, Text, MdShoppingCart } from "@dsx/react";

import ProductGrid from "./ProductGrid";
import FeaturedProductCarousel from "./FeaturedProductCarousel";
import ProductCategories from "./ProductCategories";
import SpecialOffers from "./SpecialOffers";
import ProductDetail from "./ProductDetail";
import ProductComparison from "./ProductComparison";
import ProductImageGallery from "./ProductImageGallery";
import CheckoutProgress from "./CheckoutProgress";
import ProductTags from "./ProductTags";
import CustomerSupport from "./CustomerSupport";
import ToastProvider from "./ToastProvider";

// Sample product for detail view
const sampleProduct = {
  id: 1,
  name: "Premium Headphones",
  description:
    "Wireless headphones with noise cancellation and premium sound quality. Features include 30-hour battery life, comfortable ear cushions, and voice assistant support.",
  price: 249.99,
  image: "https://placehold.co/300x200/e2e8f0/1e293b?text=Headphones",
  rating: 4.7,
  reviews: 128,
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const toggleDetailView = () => {
    setShowDetailView(!showDetailView);
  };

  return (
    <ToastProvider>
      <div>
        {/* Header with NavBar */}
        <NavBar placement="static">
          <MainNav title="DSX Product Showcase" />
        </NavBar>

        {/* Main content */}
        <main className="container">
          <div style={{ padding: "var(--size-500) 0" }}>
            <Text variant="display-headline-2">Product Showcase</Text>
            <Text variant="body">
              Explore our collection of premium products
            </Text>
          </div>

          {/* Special Offers Banner */}
          <SpecialOffers />

          {/* Featured Products Carousel */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <FeaturedProductCarousel />
          </div>

          {/* Product Categories */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <Text
              variant="headline-3"
              style={{ marginBottom: "var(--size-400)" }}
            >
              Browse by Category
            </Text>
            <ProductCategories
              onSelectCategory={handleSelectCategory}
              selectedCategory={selectedCategory}
            />
          </div>

          {/* Product Detail View (Toggle for demo) */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "var(--size-400)",
              }}
            >
              <Text variant="headline-3">
                {showDetailView ? "Product Details" : "All Products"}
              </Text>
              <button
                onClick={toggleDetailView}
                style={{
                  padding: "var(--size-200) var(--size-300)",
                  backgroundColor: "var(--color-primary-500)",
                  color: "white",
                  border: "none",
                  borderRadius: "var(--border-radius-default)",
                  cursor: "pointer",
                }}
              >
                {showDetailView ? "Show All Products" : "Show Product Details"}
              </button>
            </div>

            {showDetailView ? (
              <ProductDetail product={sampleProduct} />
            ) : (
              <ProductGrid />
            )}
          </div>

          {/* Product Comparison */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <ProductComparison />
          </div>

          {/* Product Image Gallery */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <ProductImageGallery />
          </div>

          {/* Checkout Progress */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <CheckoutProgress />
          </div>

          {/* Product Tags */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <ProductTags />
          </div>
        </main>

        {/* Footer */}
        <footer>
          <div className="container">
            <Text variant="body-small">
              © 2025 DSX Product Showcase. All rights reserved.
            </Text>
          </div>
        </footer>

        {/* Customer Support Chat */}
        <CustomerSupport />
      </div>
    </ToastProvider>
  );
};

export default App;
