import React, { useState } from "react";
import { SearchTextInput, Button, MdSearch } from "@dsx/react";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "var(--size-200)",
        maxWidth: "500px",
        margin: "var(--size-400) 0",
      }}
    >
      <SearchTextInput
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        style={{ flexGrow: 1 }}
      />
      <Button icon={MdSearch} variant="primary" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
