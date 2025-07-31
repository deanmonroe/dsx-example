import React, { useState } from "react";
import {
  NavBar,
  MainNav,
  NavBarTab,
  NavBarUtility,
  Text,
  MdShoppingCart,
  MdHome,
  MdLocalOffer,
  MdCompare,
  MdPhotoLibrary,
  MdShoppingBasket,
  DsLogo,
} from "@dsx/react";

import ProductGrid from "./ProductGrid";
import FeaturedProductCarousel from "./FeaturedProductCarousel";
import ProductCategories from "./ProductCategories";
import SpecialOffers from "./SpecialOffers";
import ProductDetail from "./ProductDetail";
import ProductComparison from "./ProductComparison";
import ProductImageGallery from "./ProductImageGallery";
import CheckoutProgress from "./CheckoutProgress";
import ProductTags from "./ProductTags";
import ToastProvider from "./ToastProvider";

// Import new components
import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import { ShippingNote } from "./ProductNote";
import { ShippingInfoTooltip, SizeGuideTooltip } from "./ProductTooltip";
import ProductFilter, { PriceRangeFilter, RatingFilter } from "./ProductFilter";
import {
  RelatedProductsScroll,
  RecentlyViewedScroll,
} from "./ScrollableProductList";

// Sample product for detail view
const sampleProduct = {
  id: 1,
  name: "Premium Headphones",
  description:
    "Wireless headphones with noise cancellation and premium sound quality. Features include 30-hour battery life, comfortable ear cushions, and voice assistant support.",
  price: 249.99,
  image:
    "https://media.istockphoto.com/id/1087256248/photo/wireless-headphone-on-laptop.jpg?s=612x612&w=0&k=20&c=sLa4RWqgf4UaRHnzD41VPClpQx240zgnNP2PZWabRBw=",
  rating: 4.7,
  reviews: 128,
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showDetailView, setShowDetailView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState("Home");
  const [productFilter, setProductFilter] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [ratingFilter, setRatingFilter] = useState("all");

  const handleSelectCategory = (categoryId) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  const toggleDetailView = () => {
    setShowDetailView(!showDetailView);
    setCurrentPage(showDetailView ? "Products" : "Product Details");
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log("Searching for:", query);
    // In a real app, you would filter products based on the search query
  };

  const handleFilterChange = (filter) => {
    setProductFilter(filter);
    console.log("Filter changed to:", filter);
    // In a real app, you would filter products based on the selected filter
  };

  return (
    <ToastProvider>
      <div style={{ backgroundColor: "var(--color-neutral-100)" }}>
        {/* Header with NavBar */}
        <NavBar placement="static">
          <MainNav background="neutral-0" corporateLogo={DsLogo} href="/">
            <NavBarTab
              href="#home"
              title="Home"
              icon={MdHome}
              active={currentPage === "Home"}
              onClick={() => setCurrentPage("Home")}
            />
            <NavBarTab
              href="#products"
              title="Products"
              icon={MdShoppingBasket}
              active={currentPage === "Products"}
              onClick={() => {
                setCurrentPage("Products");
                setShowDetailView(false);
              }}
            />
            <NavBarTab
              href="#offers"
              title="Special Offers"
              icon={MdLocalOffer}
              active={currentPage === "Offers"}
              onClick={() => setCurrentPage("Offers")}
            />
            <NavBarTab
              href="#compare"
              title="Compare"
              icon={MdCompare}
              active={currentPage === "Compare"}
              onClick={() => setCurrentPage("Compare")}
            />
            <NavBarTab
              href="#gallery"
              title="Gallery"
              icon={MdPhotoLibrary}
              active={currentPage === "Gallery"}
              onClick={() => setCurrentPage("Gallery")}
            />
            <NavBarUtility
              icon={MdShoppingCart}
              title="Cart"
              onClick={() => console.log("Cart clicked")}
            />
          </MainNav>
        </NavBar>

        {/* Main content */}
        <main className="container">
          {/* Breadcrumbs navigation */}
          <Breadcrumbs currentPage={currentPage} />

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          <div style={{ padding: "var(--size-500) 0" }}>
            <Text variant="display-headline-2">Product Showcase</Text>
            <Text variant="body">
              Explore our collection of premium products
            </Text>
          </div>

          {/* Special Offers Banner */}
          <SpecialOffers />

          {/* Shipping Note */}
          <ShippingNote />

          {/* Featured Products Carousel */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <FeaturedProductCarousel />
          </div>

          {/* Product Tags */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <ProductTags />
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

          {/* Product Filters */}
          <div style={{ margin: "var(--size-600) 0" }}>
            <div
              style={{
                display: "flex",
                gap: "var(--size-600)",
                flexWrap: "wrap",
              }}
            >
              <ProductFilter onFilterChange={handleFilterChange} />
              <PriceRangeFilter onPriceRangeChange={setPriceRange} />
              <RatingFilter onRatingChange={setRatingFilter} />
            </div>
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
              <div>
                <ProductDetail product={sampleProduct} />
                <div
                  style={{
                    display: "flex",
                    gap: "var(--size-300)",
                    marginTop: "var(--size-400)",
                  }}
                >
                  <ShippingInfoTooltip />
                  <SizeGuideTooltip />
                </div>
              </div>
            ) : (
              <ProductGrid />
            )}
          </div>

          {/* Related Products (only shown in detail view) */}
          {showDetailView && (
            <RelatedProductsScroll onProductClick={toggleDetailView} />
          )}

          {/* Recently Viewed Products */}
          <RecentlyViewedScroll onProductClick={toggleDetailView} />

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
        </main>

        {/* Footer */}
        <footer>
          <div className="container">
            <Text variant="body-small">
              © 2025 Summer Hackathon. All rights reserved.
            </Text>
          </div>
        </footer>
      </div>
    </ToastProvider>
  );
};

export default App;
