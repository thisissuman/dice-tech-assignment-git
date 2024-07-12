import React from "react";

const Sort = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSortChange}>
        <option value="stars">Stars</option>
        <option value="watchers_count">Watchers Count</option>
        <option value="score">Score</option>
        <option value="name">Name</option>
        <option value="created_at">Created At</option>
        <option value="updated_at">Updated At</option>
      </select>
    </div>
  );
};

export default Sort;
