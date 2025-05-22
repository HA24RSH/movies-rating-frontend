import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, year, image, overview, rating }) => {
  // Round the rating to the nearest integer
  const roundedRating = Math.round(rating); 

  const truncatedDescription = overview.length > 150 ? overview.substring(0, 150) + '...' : overview;

  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-year">{year}</p>
        <p className="movie-card-description">{truncatedDescription}</p> {/* Shortened description */}
        <h2 className="movie-card-rating">Rating: {roundedRating}</h2> {/* Show rounded rating */}
      </div>
    </div>
  );
};

export default MovieCard;
