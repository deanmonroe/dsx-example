import React from "react";
import { Note, Button, MdInfo, MdLocalShipping } from "@dsx/react";

const ProductNote = ({
  variant = "info",
  title,
  children,
  showAction = false,
}) => {
  const getIcon = () => {
    switch (variant) {
      case "success":
        return MdLocalShipping;
      case "warning":
      case "danger":
      case "info":
      default:
        return MdInfo;
    }
  };

  return (
    <div style={{ margin: "var(--size-400) 0" }}>
      <Note
        variant={variant}
        icon={getIcon()}
        title={title}
        actions={
          showAction ? (
            <Button
              variant={variant === "danger" ? "danger" : "primary"}
              size="small"
            >
              {variant === "danger" ? "Resolve" : "Learn More"}
            </Button>
          ) : undefined
        }
      >
        {children}
      </Note>
    </div>
  );
};

// Usage examples:
export const ShippingNote = () => (
  <ProductNote variant="success" title="Free Shipping Available" showAction>
    Orders over $50 qualify for free shipping. Add more items to your cart to
    qualify.
  </ProductNote>
);

export const LimitedStockNote = () => (
  <ProductNote variant="warning" title="Limited Stock">
    Only 5 items left in stock. Order soon to secure your purchase.
  </ProductNote>
);

export default ProductNote;
