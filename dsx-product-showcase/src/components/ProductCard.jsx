import React from "react";
import {
  Card,
  Text,
  Image,
  Button,
  MdShoppingCart,
  MdInfo,
  useToast,
} from "@dsx/react";

const ProductCard = ({ product }) => {
  const { name, description, price, image } = product;
  const toast = useToast();

  const handleAddToCart = () => {
    toast(`Added ${name} to cart!`, {
      variant: "success",
      autoClose: 3000,
      title: "Added to Cart",
    });
  };

  const handleViewDetails = () => {
    toast(`Viewing details for ${name}`, {
      variant: "info",
      autoClose: 3000,
      title: "Product Details",
    });
  };

  return (
    <Card variant="shadow" size="default">
      <div style={{ padding: "var(--size-300)" }}>
        {/* Product Image */}
        <Image
          src={image}
          alt={name}
          cornerRadius="default"
          objectFit="cover"
          style={{ width: "100%", height: "200px" }}
        />

        {/* Product Info */}
        <div style={{ padding: "var(--size-300) 0" }}>
          <Text variant="headline-4">{name}</Text>
          <Text variant="body-small" style={{ margin: "var(--size-200) 0" }}>
            {description}
          </Text>
          <Text
            variant="headline-5"
            style={{ color: "var(--color-primary-600)" }}
          >
            ${price.toFixed(2)}
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
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
          <Button variant="secondary" icon={MdInfo} onClick={handleViewDetails}>
            Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
