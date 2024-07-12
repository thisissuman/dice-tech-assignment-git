// src/components/Search.js
import React from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(query);
  };

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
