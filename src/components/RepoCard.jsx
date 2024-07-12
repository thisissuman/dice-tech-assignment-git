import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
    <img src={repo.owner.avatar_url} alt="avatar" />
    <div className="repo-card-content">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p className="stars">⭐ Stars: {repo.stargazers_count}</p>
      <p>Language: {repo.language}</p>
    </div>
  </div>
  );
};

export default RepoCard;
