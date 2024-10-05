// src/components/MovieCard.js
import React from "react";

const MovieCard = ({ movie, darkMode }) => {
  const imagePath = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";

  return (
    <div className={`card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <img src={imagePath} className="card-img-top" alt={movie.Title} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text"><strong>Year:</strong> {movie.Year}</p>
        <p className="card-text"><strong>Type:</strong> {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
