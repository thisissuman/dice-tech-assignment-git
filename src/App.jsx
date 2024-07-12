// src/App.js
import React, { useState } from "react";
import Search from "./components/Search";
import RepoCard from "./components/RepoCard";
import Sort from "./components/Sort";
import "./App.css";
const App = () => {
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState("stars");

  const fetchRepos = async (query) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=${query}&sort=${sortOption}`
    );
    const data = await response.json();
    setRepos(data.items);
  };
  /* useEffect(() => {
    console.log("use effect called");
  }, [repos]); */

  const handleSearch = (query) => {
    fetchRepos(query);
  };

  const handleSortChange = (sort) => {
    console.log(sort);
    setSortOption(sort);

    // fetchRepos(query);
  };

  return (
    <div className="App">
      <Search onSearch={handleSearch} sortOption={sortOption} />
      <Sort onSortChange={handleSortChange} />
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
        {repos.length > 0 ? "" : <p style={{paddingTop:"50px"}}>Please enter some input</p>}
      </div>
    </div>
  );
};

export default App;
