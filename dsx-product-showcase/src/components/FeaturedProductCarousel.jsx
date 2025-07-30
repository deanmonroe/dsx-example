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
    image:
      "https://media.istockphoto.com/id/1087256248/photo/wireless-headphone-on-laptop.jpg?s=612x612&w=0&k=20&c=sLa4RWqgf4UaRHnzD41VPClpQx240zgnNP2PZWabRBw=",
    featured: true,
  },
  {
    id: 2,
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health monitoring",
    price: 199.99,
    image:
      "https://media.istockphoto.com/id/1438573840/vector/fitness-tracker-display-smart-watch-interface.jpg?s=612x612&w=0&k=20&c=eFX4n8E8M_f3-xsqhRkdyThCNdE0EI372GYiYF2oN5Y=",
    featured: true,
  },
  {
    id: 3,
    name: "Wireless Speaker",
    description: "Portable speaker with premium sound quality",
    price: 129.99,
    image:
      "https://media.istockphoto.com/id/1335374517/vector/black-bluetooth-speaker-with-power-blue-lead-on-white-background-eps10-vector-illusration.jpg?s=612x612&w=0&k=20&c=FJHzQf24mszeen0xJJz_NQdrm89sGau_CiYJM-_-y9o=",
    featured: true,
  },
  {
    id: 4,
    name: "Laptop Stand",
    description: "Ergonomic laptop stand for improved posture",
    price: 49.99,
    image:
      "https://media.istockphoto.com/id/1125614863/photo/the-laptop-is-open-and-mounted-on-a-cooling-stand.jpg?s=612x612&w=0&k=20&c=YY9gxEYpezjq38BZx27xwf1ddBKWKPcAOVqnmODJ774=",
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
