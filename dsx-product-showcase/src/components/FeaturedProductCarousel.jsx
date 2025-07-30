import React from "react";
import {
  CardCarousel,
  Card,
  Text,
  Image,
  Button,
  MdShoppingCart,
  MdInfo,
  useToast,
} from "@dsx/react";

// Featured products data - a subset of products that are highlighted
const featuredProducts = [
  {
    id: 1,
    name: "Premium Headphones",
    description: "Wireless headphones with noise cancellation",
    price: 249.99,
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Headphones",
    featured: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 199.99,
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Smart+Watch",
    featured: true,
  },
  {
    id: 3,
    name: "Wireless Speaker",
    description: "Portable speaker with premium sound quality",
    price: 129.99,
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Speaker",
    featured: true,
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for improved posture",
    price: 49.99,
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Laptop+Stand",
    featured: true,
  },
];

const FeaturedProductCarousel = () => {
  const toast = useToast();

  const handleAddToCart = (product) => {
    toast(`Added ${product.name} to cart!`, {
      variant: "success",
      autoClose: 3000,
      title: "Added to Cart",
    });
  };

  const handleViewDetails = (product) => {
    toast(`Viewing details for ${product.name}`, {
      variant: "info",
      autoClose: 3000,
      title: "Product Details",
    });
  };

  // Create card elements for each featured product
  const productCards = featuredProducts.map((product) => (
    <div key={product.id} className="featured-product-card">
      <Card variant="shadow" size="default">
        <div style={{ padding: "var(--size-300)" }}>
          {/* Product Image */}
          <Image
            src={product.image}
            alt={product.name}
            cornerRadius="default"
            objectFit="cover"
            style={{ width: "100%", height: "250px" }}
          />

          {/* Product Info */}
          <div style={{ padding: "var(--size-300) 0" }}>
            <Text variant="headline-4">{product.name}</Text>
            <Text variant="body-small" style={{ margin: "var(--size-200) 0" }}>
              {product.description}
            </Text>
            <Text
              variant="headline-5"
              style={{ color: "var(--color-primary-600)" }}
            >
              ${product.price.toFixed(2)}
            </Text>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              gap: "var(--size-300)",
              marginTop: "var(--size-300)",
            }}
          >
            <Button
              variant="primary"
              icon={MdShoppingCart}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
            <Button
              variant="secondary"
              icon={MdInfo}
              onClick={() => handleViewDetails(product)}
            >
              Details
            </Button>
          </div>
        </div>
      </Card>
    </div>
  ));

  return (
    <div className="featured-products-section">
      <Text variant="headline-3" style={{ marginBottom: "var(--size-400)" }}>
        Featured Products
      </Text>
      <CardCarousel
        itemsToShow={3}
        navigation="internal"
        wrapping="wrap"
        paging="item"
        pagingVariant="dots"
      >
        {productCards}
      </CardCarousel>
    </div>
  );
};

export default FeaturedProductCarousel;
