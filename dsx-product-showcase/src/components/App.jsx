import React from "react";
import { NavBar, MainNav, Text, MdShoppingCart } from "@dsx/react";

import ProductGrid from "./ProductGrid";

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
          <Text variant="display-headline-2">Featured Products</Text>
          <Text variant="body">Explore our collection of premium products</Text>
        </div>

        {/* Product grid */}
        <ProductGrid />
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
