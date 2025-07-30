import React, { useState } from "react";
import {
  Card,
  Text,
  Pill,
  Button,
  HorizontalScrollable,
  MdFilterList,
  MdClear,
} from "@dsx/react";

const ProductTags = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Sample product tags/categories
  const availableTags = [
    { id: 1, name: "Electronics", color: "color-primary" },
    { id: 2, name: "Audio", color: "color-accent" },
    { id: 3, name: "Wireless", color: "color-success" },
    { id: 4, name: "Headphones", color: "color-warning" },
    { id: 5, name: "Speakers", color: "color-danger" },
    { id: 6, name: "Wearables", color: "color-primary" },
    { id: 7, name: "Smart Home", color: "color-accent" },
    { id: 8, name: "Gaming", color: "color-success" },
    { id: 9, name: "Accessories", color: "color-warning" },
    { id: 10, name: "New Arrivals", color: "color-danger" },
    { id: 11, name: "Sale", color: "color-primary" },
    { id: 12, name: "Premium", color: "color-accent" },
    { id: 13, name: "Budget", color: "color-success" },
    { id: 14, name: "Featured", color: "color-warning" },
    { id: 15, name: "Limited Edition", color: "color-danger" },
  ];

  const toggleTag = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  return (
    <div className="product-tags">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "var(--size-400)",
        }}
      >
        <Text variant="headline-3">Product Tags</Text>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--size-200)",
          }}
        >
          <Text variant="body-small">
            {selectedTags.length} tag{selectedTags.length !== 1 ? "s" : ""}{" "}
            selected
          </Text>
          {selectedTags.length > 0 && (
            <Button
              variant="ui-control"
              icon={MdClear}
              onClick={clearAllTags}
              size="small"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>

      <Card variant="shadow">
        <div style={{ padding: "var(--size-400)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--size-200)",
              marginBottom: "var(--size-300)",
            }}
          >
            <MdFilterList size={24} />
            <Text variant="headline-4">Filter by Tags</Text>
          </div>

          <HorizontalScrollable>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--size-200)",
                padding: "var(--size-200) 0",
              }}
            >
              {availableTags.map((tag) => {
                const isSelected = selectedTags.includes(tag.id);
                return (
                  <Pill
                    key={tag.id}
                    color={isSelected ? tag.color : "color-neutral"}
                    onClick={() => toggleTag(tag.id)}
                    style={{
                      cursor: "pointer",
                      opacity: isSelected ? 1 : 0.7,
                      transition: "all 0.2s ease",
                      fontWeight: isSelected ? "bold" : "normal",
                    }}
                  >
                    {tag.name}
                  </Pill>
                );
              })}
            </div>
          </HorizontalScrollable>

          {selectedTags.length > 0 && (
            <div style={{ marginTop: "var(--size-400)" }}>
              <Text
                variant="headline-4"
                style={{ marginBottom: "var(--size-300)" }}
              >
                Selected Tags
              </Text>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "var(--size-200)",
                }}
              >
                {selectedTags.map((tagId) => {
                  const tag = availableTags.find((t) => t.id === tagId);
                  return (
                    <Pill
                      key={tag.id}
                      color={tag.color}
                      onClick={() => toggleTag(tag.id)}
                      style={{ cursor: "pointer" }}
                    >
                      {tag.name}{" "}
                      <MdClear style={{ marginLeft: "var(--size-100)" }} />
                    </Pill>
                  );
                })}
              </div>
            </div>
          )}

          <div style={{ marginTop: "var(--size-400)" }}>
            <Text variant="body">
              Select tags to filter products. Combine multiple tags to narrow
              down your search results.
            </Text>
          </div>

          {selectedTags.length > 0 && (
            <div style={{ marginTop: "var(--size-400)", textAlign: "right" }}>
              <Button variant="primary">Apply Filters</Button>
            </div>
          )}
        </div>
      </Card>

      {/* Example of how tags can be used in product cards */}
      <div style={{ marginTop: "var(--size-500)" }}>
        <Text variant="headline-4" style={{ marginBottom: "var(--size-300)" }}>
          Example Product with Tags
        </Text>
        <Card variant="shadow">
          <div style={{ padding: "var(--size-400)" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Text variant="headline-4">Premium Headphones</Text>
              <Text variant="headline-4">$249.99</Text>
            </div>
            <div style={{ margin: "var(--size-300) 0" }}>
              <Text>
                Wireless headphones with noise cancellation and premium sound
                quality.
              </Text>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "var(--size-200)",
              }}
            >
              <Pill color="color-primary">Electronics</Pill>
              <Pill color="color-accent">Audio</Pill>
              <Pill color="color-success">Wireless</Pill>
              <Pill color="color-warning">Headphones</Pill>
              <Pill color="color-danger">Premium</Pill>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductTags;
