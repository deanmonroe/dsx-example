import React from "react";
import { Tooltip, Button, MdInfo, MdHelp, MdLocalShipping } from "@dsx/react";

const ProductTooltip = ({ children, contents, placement = "top" }) => {
  return (
    <Tooltip contents={contents} placement={placement}>
      {children}
    </Tooltip>
  );
};

// Pre-configured tooltip components for common product information
export const ShippingInfoTooltip = ({ children }) => (
  <ProductTooltip
    contents="Free shipping on orders over $50. Standard delivery takes 3-5 business days."
    placement="top"
  >
    {children || (
      <Button iconOnly variant="ui-control" icon={MdLocalShipping}>
        Shipping Info
      </Button>
    )}
  </ProductTooltip>
);

export const SizeGuideTooltip = ({ children }) => (
  <ProductTooltip
    contents="View our size guide to find your perfect fit. Measurements are in inches."
    placement="bottom"
  >
    {children || (
      <Button iconOnly variant="ui-control" icon={MdHelp}>
        Size Guide
      </Button>
    )}
  </ProductTooltip>
);

export const PriceMatchTooltip = ({ children }) => (
  <ProductTooltip
    contents="We'll match any competitor's price within 14 days of purchase."
    placement="right"
  >
    {children || (
      <Button iconOnly variant="ui-control" icon={MdInfo}>
        Price Match
      </Button>
    )}
  </ProductTooltip>
);

export default ProductTooltip;
