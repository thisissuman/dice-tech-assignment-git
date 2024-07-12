import React from 'react';

const RepoCard = ({ repo }) => {
  return (
    <div className="repo-card">
      <img src={repo.owner.avatar_url} alt="avatar" />
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>⭐ Stars: {repo.stargazers_count}</p>
      <p>Language: {repo.language}</p>
    </div>
  );
};

export default RepoCard;
