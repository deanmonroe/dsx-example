import React, { useState } from "react";
import { SegmentedControl, Text, MdFilterList } from "@dsx/react";

const ProductFilter = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    if (onFilterChange) {
      onFilterChange(value);
    }
  };

  return (
    <div style={{ margin: "var(--size-400) 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--size-300)",
          marginBottom: "var(--size-300)",
        }}
      >
        <MdFilterList size="24px" />
        <Text variant="label">Filter Products</Text>
      </div>

      <SegmentedControl
        value={selectedFilter}
        onChange={handleFilterChange}
        options={[
          { value: "all", label: "All" },
          { value: "new", label: "New Arrivals" },
          { value: "sale", label: "On Sale" },
          { value: "popular", label: "Popular" },
        ]}
      />
    </div>
  );
};

// Price range filter component using SegmentedControl
export const PriceRangeFilter = ({ onPriceRangeChange }) => {
  const [selectedRange, setSelectedRange] = useState("all");

  const handleRangeChange = (value) => {
    setSelectedRange(value);
    if (onPriceRangeChange) {
      onPriceRangeChange(value);
    }
  };

  return (
    <div style={{ margin: "var(--size-400) 0" }}>
      <Text variant="label" style={{ marginBottom: "var(--size-300)" }}>
        Price Range
      </Text>

      <SegmentedControl
        value={selectedRange}
        onChange={handleRangeChange}
        options={[
          { value: "all", label: "All Prices" },
          { value: "under50", label: "Under $50" },
          { value: "50to100", label: "$50 - $100" },
          { value: "over100", label: "Over $100" },
        ]}
      />
    </div>
  );
};

// Rating filter component using SegmentedControl
export const RatingFilter = ({ onRatingChange }) => {
  const [selectedRating, setSelectedRating] = useState("all");

  const handleRatingChange = (value) => {
    setSelectedRating(value);
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div style={{ margin: "var(--size-400) 0" }}>
      <Text variant="label" style={{ marginBottom: "var(--size-300)" }}>
        Rating
      </Text>

      <SegmentedControl
        value={selectedRating}
        onChange={handleRatingChange}
        options={[
          { value: "all", label: "All Ratings" },
          { value: "4plus", label: "4★ & Up" },
          { value: "3plus", label: "3★ & Up" },
          { value: "2plus", label: "2★ & Up" },
        ]}
      />
    </div>
  );
};

export default ProductFilter;
