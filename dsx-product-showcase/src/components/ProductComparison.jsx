import React from "react";
import {
  Card,
  Text,
  Pill,
  MdCheck,
  MdClose,
  MdStar,
  StandaloneIcon,
} from "@dsx/react";

const ProductComparison = () => {
  // Sample products for comparison
  const products = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 249.99,
      features: {
        "Noise Cancellation": true,
        "Battery Life": "30 hours",
        "Water Resistant": false,
        Wireless: true,
        "Voice Assistant": true,
      },
      rating: 4.7,
    },
    {
      id: 2,
      name: "Standard Headphones",
      price: 149.99,
      features: {
        "Noise Cancellation": false,
        "Battery Life": "20 hours",
        "Water Resistant": false,
        Wireless: true,
        "Voice Assistant": false,
      },
      rating: 4.2,
    },
    {
      id: 3,
      name: "Sport Headphones",
      price: 179.99,
      features: {
        "Noise Cancellation": false,
        "Battery Life": "15 hours",
        "Water Resistant": true,
        Wireless: true,
        "Voice Assistant": true,
      },
      rating: 4.5,
    },
    {
      id: 4,
      name: "Budget Headphones",
      price: 79.99,
      features: {
        "Noise Cancellation": false,
        "Battery Life": "12 hours",
        "Water Resistant": false,
        Wireless: true,
        "Voice Assistant": false,
      },
      rating: 3.9,
    },
  ];

  // Define the features to compare
  const features = [
    "Noise Cancellation",
    "Battery Life",
    "Water Resistant",
    "Wireless",
    "Voice Assistant",
  ];

  return (
    <div className="product-comparison">
      <Text variant="headline-3" style={{ marginBottom: "var(--size-400)" }}>
        Product Comparison
      </Text>

      <Card variant="shadow">
        <div style={{ padding: "var(--size-400)", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: "var(--size-300)",
                    borderBottom: "1px solid var(--color-neutral-200)",
                  }}
                ></th>
                {products.map((product) => (
                  <th
                    key={product.id}
                    style={{
                      padding: "var(--size-300)",
                      textAlign: "center",
                      borderBottom: "1px solid var(--color-neutral-200)",
                    }}
                  >
                    <Text variant="headline-4">{product.name}</Text>
                    <Pill
                      color="color-primary"
                      style={{ margin: "var(--size-200) 0" }}
                    >
                      ${product.price.toFixed(2)}
                    </Pill>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "var(--size-100)",
                      }}
                    >
                      <StandaloneIcon
                        icon={MdStar}
                        color="var(--color-warning-500)"
                      />
                      <Text>{product.rating}</Text>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature}>
                  <td
                    style={{
                      padding: "var(--size-300)",
                      fontWeight: "bold",
                      borderBottom: "1px solid var(--color-neutral-200)",
                    }}
                  >
                    <Text variant="label">{feature}</Text>
                  </td>
                  {products.map((product) => {
                    const value = product.features[feature];
                    let content;

                    if (typeof value === "boolean") {
                      content = value ? (
                        <StandaloneIcon
                          icon={MdCheck}
                          color="var(--color-success-500)"
                          size="lg"
                        />
                      ) : (
                        <StandaloneIcon
                          icon={MdClose}
                          color="var(--color-danger-500)"
                          size="lg"
                        />
                      );
                    } else {
                      content = <Text>{value}</Text>;
                    }

                    return (
                      <td
                        key={`${product.id}-${feature}`}
                        style={{
                          textAlign: "center",
                          padding: "var(--size-300)",
                          borderBottom: "1px solid var(--color-neutral-200)",
                        }}
                      >
                        {content}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default ProductComparison;
