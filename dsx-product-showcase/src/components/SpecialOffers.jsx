import React from "react";
import { Note, Link, Text } from "@dsx/react";

const SpecialOffers = () => {
  return (
    <div className="special-offers" style={{ marginBottom: "var(--size-500)" }}>
      <Note variant="info" title="Summer Sale!" layout="inline">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text>
            Get 20% off on all products with code <strong>SUMMER20</strong>
          </Text>
          <div style={{ display: "flex", gap: "var(--size-300)" }}>
            <Link href="#shop-now">Shop Now</Link>
            <Link href="#learn-more">Learn More</Link>
          </div>
        </div>
      </Note>
    </div>
  );
};

export default SpecialOffers;
