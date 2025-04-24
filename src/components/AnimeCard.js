import React from 'react';
import './AnimeCard.css';

const AnimeCard = ({ title, year, image, description }) => {
  return (
    <div className="anime-card">
      <img src={image} alt={title} className="anime-card-image" />
      <div className="anime-card-content">
        <h3 className="anime-card-title">{title}</h3>
        <p className="anime-card-year">{year}</p>
        <p className="anime-card-description">{description}</p>
      </div>
    </div>
  );
};

export default AnimeCard;