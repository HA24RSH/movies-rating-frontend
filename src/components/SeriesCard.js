import React from 'react';
import './SeriesCard.css';

const SeriesCard = ({ title, year, image, description }) => {
    return (
        <div className="series-card">
            <img src={image} alt={title} className="series-card-image" />
            <div className="series-card-content">
                <h3 className="series-card-title">{title}</h3>
                <p className="series-card-year">{year}</p>
                <p className="series-card-description">{description}</p>
            </div>
        </div>
    );
};

export default SeriesCard;