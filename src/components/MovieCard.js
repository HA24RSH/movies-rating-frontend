import React from 'react';
import './MovieCard.css';

const MovieCard = ({ title, year, image, description }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{title}</h3>
        <p className="movie-card-year">{year}</p>
        <p className="movie-card-description">{description}</p>
      </div>
    </div>
  );
};

export default MovieCard;