// src/components/Search.js
import React, { useEffect } from "react";

const Search = ({ onSearch, sortOption }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  useEffect(() => {
    if (query.length > 0) {
      onSearch(query);
    }
  }, [sortOption]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search GitHub Repositories"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
