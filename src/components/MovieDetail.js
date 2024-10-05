// src/components/MovieDetail.js
import React from "react";

const Star = ({ color }) => {
    return <span style={{ color, fontSize: "1.5rem" }}>★</span>;
  };

const MovieDetail = ({ movie, darkMode }) => {
  if (!movie) return null;

  const imagePath = movie.Poster !== "N/A"
    ? movie.Poster
    : "https://via.placeholder.com/500";
    
    const getRatingColor = (rating) => {
        const numericRating = parseFloat(rating);
        if (numericRating >= 8) return "green";   // Excellent
        if (numericRating >= 6) return "yellow";  // Good
        if (numericRating >= 4) return "orange";  // Average
        return "red";                             // Poor
      };

  const generateStars = (rating) => {
    const numericRating = parseFloat(rating);
    const starCount = Math.round(numericRating / 2);
    const starColor = getRatingColor(rating); 

    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <Star key={index} color={index < starCount ? starColor : "#ccc"} />
        ))}
      </div>
    );
  };

  return (
    <div className={`movie-detail-card card mb-4 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} itemID="details">
      <img src={imagePath} className="movie-detail-img card-img-top" alt={movie.Title} />
      <div className="movie-detail-body card-body">
        <h2 className="card-title">{movie.Title}</h2>
        <p className="card-text"><strong>Plot:</strong> {movie.Plot}</p>
        <p className="card-text"><strong>Release Year:</strong> {movie.Year}</p>
        <p className="card-text"><strong>Genre:</strong> {movie.Genre}</p>
        <p className="card-text"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>

        <div className="card-text">
          <strong>Rating:</strong> {generateStars(movie.imdbRating)}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
