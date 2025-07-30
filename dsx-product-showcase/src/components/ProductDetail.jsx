import React, { useState } from "react";
import {
  Gallery,
  Card,
  Text,
  Button,
  Pill,
  Note,
  Tooltip,
  useToast,
  MdShoppingCart,
  MdFavorite,
  MdShare,
  MdInfo,
  StandaloneIcon,
} from "@dsx/react";
import ProductRating from "./ProductRating";

const ProductDetail = ({ product }) => {
  const toast = useToast();
  const [quantity, setQuantity] = useState(1);

  // Mock gallery items for the product
  const galleryItems = [
    {
      image: product.image,
      thumbnail: product.image,
      zoom: product.image,
      alt: product.name,
    },
    {
      image: `${product.image}?v=2`,
      thumbnail: `${product.image}?v=2`,
      zoom: `${product.image}?v=2`,
      alt: `${product.name} - Alternate View`,
    },
    {
      image: `${product.image}?v=3`,
      thumbnail: `${product.image}?v=3`,
      zoom: `${product.image}?v=3`,
      alt: `${product.name} - Side View`,
    },
  ];

  const handleAddToCart = () => {
    toast(`Added ${quantity} ${product.name} to your cart!`, {
      variant: "success",
      autoClose: 3000,
      title: "Added to Cart",
    });
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail">
      <Card variant="shadow" size="default">
        <div style={{ padding: "var(--size-400)" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--size-500)",
            }}
          >
            {/* Product Gallery */}
            <div>
              <Gallery items={galleryItems} direction="horizontal" />
            </div>

            {/* Product Info */}
            <div>
              <div style={{ marginBottom: "var(--size-400)" }}>
                <Text variant="headline-2">{product.name}</Text>
                <div
                  style={{
                    margin: "var(--size-300) 0",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Tooltip contents="Current price. Members get 10% off!">
                    <Pill color="color-primary">{`$${product.price.toFixed(
                      2
                    )}`}</Pill>
                  </Tooltip>
                  <Tooltip contents="Available for immediate shipping">
                    <Pill
                      color="color-accent"
                      style={{ marginLeft: "var(--size-200)" }}
                    >
                      In Stock
                    </Pill>
                  </Tooltip>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <Text variant="body">{product.description}</Text>
                  <Tooltip contents="Product specifications and features">
                    <StandaloneIcon
                      icon={MdInfo}
                      color="var(--color-primary-500)"
                    />
                  </Tooltip>
                </div>

                {/* Product Rating */}
                <div
                  style={{
                    margin: "var(--size-400) 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "var(--size-200)",
                  }}
                >
                  <ProductRating
                    rating={product.rating || 4.5}
                    reviews={product.reviews || 100}
                  />
                  <Tooltip contents="Based on verified customer reviews">
                    <StandaloneIcon
                      icon={MdInfo}
                      color="var(--color-primary-500)"
                      size="sm"
                    />
                  </Tooltip>
                </div>
              </div>

              {/* Special Offer Note */}
              <Note
                variant="info"
                title="Limited Time Offer"
                style={{ marginBottom: "var(--size-400)" }}
              >
                Free shipping on orders over $100. Order now and get a 10%
                discount!
              </Note>

              {/* Quantity and Add to Cart */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--size-300)",
                  marginBottom: "var(--size-400)",
                }}
              >
                <label htmlFor="quantity">
                  <Text variant="label">Quantity:</Text>
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  style={{
                    width: "60px",
                    padding: "var(--size-100)",
                    border: "1px solid var(--color-neutral-300)",
                    borderRadius: "var(--border-radius-default)",
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "flex",
                  gap: "var(--size-300)",
                }}
              >
                <Tooltip contents="Add this item to your shopping cart">
                  <Button
                    variant="primary"
                    icon={MdShoppingCart}
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                </Tooltip>
                <Tooltip contents="Save to your wishlist for later">
                  <Button variant="secondary" icon={MdFavorite}>
                    Save
                  </Button>
                </Tooltip>
                <Tooltip contents="Share this product with friends">
                  <Button variant="secondary" icon={MdShare}>
                    Share
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
