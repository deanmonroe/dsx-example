import React from "react";
import { NavBar, MainNav, Text, MdShoppingCart } from "@dsx/react";

import ProductGrid from "./ProductGrid";
import FeaturedProductCarousel from "./FeaturedProductCarousel";

const App = () => {
  return (
    <div>
      {/* Header with NavBar */}
      <NavBar placement="static">
        <MainNav title="DSX Product Showcase" />
      </NavBar>

      {/* Main content */}
      <main className="container">
        <div style={{ padding: "var(--size-500) 0" }}>
          <Text variant="display-headline-2">Product Showcase</Text>
          <Text variant="body">Explore our collection of premium products</Text>
        </div>

        {/* Featured Products Carousel */}
        <div style={{ margin: "var(--size-600) 0" }}>
          <FeaturedProductCarousel />
        </div>

        {/* All Products Grid */}
        <div style={{ margin: "var(--size-600) 0" }}>
          <Text
            variant="headline-3"
            style={{ marginBottom: "var(--size-400)" }}
          >
            All Products
          </Text>
          <ProductGrid />
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
    </div>
  );
};

export default App;
