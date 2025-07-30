import React from "react";
import { Meter, Text } from "@dsx/react";

const ProductRating = ({ rating, reviews }) => {
  // Convert rating to a percentage (assuming rating is out of 5)
  const ratingPercentage = (rating / 5) * 100;

  return (
    <div className="product-rating">
      <div style={{ marginBottom: "var(--size-200)" }}>
        <Text variant="body-small">Customer Rating</Text>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--size-200)",
        }}
      >
        <Meter
          value={ratingPercentage}
          max={100}
          color="color-primary-400"
          size="small"
          style={{ width: "150px" }}
        />
        <Text variant="body-small">
          {rating.toFixed(1)}/5 ({reviews} reviews)
        </Text>
      </div>
    </div>
  );
};

export default ProductRating;
