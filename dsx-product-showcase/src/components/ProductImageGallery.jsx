import React, { useState } from "react";
import {
  Card,
  Text,
  Button,
  HorizontalScrollable,
  MdZoomIn,
  MdZoomOut,
  MdFullscreen,
  MdFullscreenExit,
  StandaloneIcon,
} from "@dsx/react";

const ProductImageGallery = () => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Sample gallery items for multiple products
  const productGalleries = [
    {
      id: 1,
      name: "Premium Headphones",
      images: [
        {
          src: "https://placehold.co/600x400/e2e8f0/1e293b?text=Headphones+Front",
          alt: "Premium Headphones - Front View",
        },
        {
          src: "https://placehold.co/600x400/e2e8f0/1e293b?text=Headphones+Side",
          alt: "Premium Headphones - Side View",
        },
        {
          src: "https://placehold.co/600x400/e2e8f0/1e293b?text=Headphones+Back",
          alt: "Premium Headphones - Back View",
        },
      ],
    },
    {
      id: 2,
      name: "Wireless Speaker",
      images: [
        {
          src: "https://placehold.co/600x400/f0e7e2/1e293b?text=Speaker+Front",
          alt: "Wireless Speaker - Front View",
        },
        {
          src: "https://placehold.co/600x400/f0e7e2/1e293b?text=Speaker+Side",
          alt: "Wireless Speaker - Side View",
        },
        {
          src: "https://placehold.co/600x400/f0e7e2/1e293b?text=Speaker+Controls",
          alt: "Wireless Speaker - Controls",
        },
      ],
    },
    {
      id: 3,
      name: "Smart Watch",
      images: [
        {
          src: "https://placehold.co/600x400/e2f0e8/1e293b?text=Watch+Front",
          alt: "Smart Watch - Front View",
        },
        {
          src: "https://placehold.co/600x400/e2f0e8/1e293b?text=Watch+Side",
          alt: "Smart Watch - Side View",
        },
        {
          src: "https://placehold.co/600x400/e2f0e8/1e293b?text=Watch+Strap",
          alt: "Smart Watch - Strap",
        },
      ],
    },
  ];

  // State to track selected image for each product
  const [selectedImages, setSelectedImages] = useState({
    1: 0,
    2: 0,
    3: 0,
  });

  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 0.25, 2));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 0.25, 0.5));
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  const handleImageChange = (productId, imageIndex) => {
    setSelectedImages({
      ...selectedImages,
      [productId]: imageIndex,
    });
  };

  return (
    <div className="product-image-gallery">
      <Text variant="headline-3" style={{ marginBottom: "var(--size-400)" }}>
        Product Image Gallery
      </Text>

      <div style={{ marginBottom: "var(--size-400)" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "var(--size-200)",
            marginBottom: "var(--size-300)",
          }}
        >
          <Button
            variant="ui-control"
            icon={MdZoomIn}
            onClick={handleZoomIn}
            disabled={zoomLevel >= 2}
          >
            Zoom In
          </Button>
          <Button
            variant="ui-control"
            icon={MdZoomOut}
            onClick={handleZoomOut}
            disabled={zoomLevel <= 0.5}
          >
            Zoom Out
          </Button>
          <Button
            variant="ui-control"
            icon={isFullscreen ? MdFullscreenExit : MdFullscreen}
            onClick={toggleFullscreen}
          >
            {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </Button>
        </div>

        <HorizontalScrollable>
          <div
            style={{
              display: "flex",
              gap: "var(--size-500)",
              padding: "var(--size-300)",
            }}
          >
            {productGalleries.map((product) => (
              <Card
                key={product.id}
                variant="shadow"
                style={{
                  width: isFullscreen ? "100%" : "auto",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ padding: "var(--size-300)" }}>
                  <Text
                    variant="headline-4"
                    style={{ marginBottom: "var(--size-300)" }}
                  >
                    {product.name}
                  </Text>
                  <div
                    style={{
                      transform: `scale(${zoomLevel})`,
                      transformOrigin: "top left",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    {/* Main image display */}
                    <div style={{ marginBottom: "var(--size-300)" }}>
                      <img
                        src={product.images[selectedImages[product.id]].src}
                        alt={product.images[selectedImages[product.id]].alt}
                        style={{
                          width: "100%",
                          height: "auto",
                          maxWidth: isFullscreen ? "100%" : "400px",
                          borderRadius: "var(--border-radius-default)",
                        }}
                      />
                    </div>

                    {/* Thumbnail navigation */}
                    <div style={{ display: "flex", gap: "var(--size-200)" }}>
                      {product.images.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => handleImageChange(product.id, index)}
                          style={{
                            cursor: "pointer",
                            border:
                              selectedImages[product.id] === index
                                ? "2px solid var(--color-primary-500)"
                                : "2px solid transparent",
                            borderRadius: "var(--border-radius-default)",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </HorizontalScrollable>
      </div>

      <div style={{ marginTop: "var(--size-400)" }}>
        <Text variant="body">
          Explore our product images in high resolution. Use the zoom controls
          to see more details, or switch to fullscreen mode for an immersive
          viewing experience.
        </Text>
      </div>
    </div>
  );
};

export default ProductImageGallery;
