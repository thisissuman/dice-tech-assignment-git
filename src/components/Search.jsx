// src/components/Search.js
import React, { useEffect } from "react";

const Search = ({ onSearch, sortOption }) => {
  const [query, setQuery] = React.useState("");

  const handleSearch = () => {
    onSearch(query);
  };

   useEffect(() => {
    console.log(query.length)
    if (query.length > 0) {
      onSearch(query);
      console.log("use")
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
