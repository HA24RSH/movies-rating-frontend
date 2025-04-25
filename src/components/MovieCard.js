import React, { useEffect } from 'react';
import axios from 'axios';
import './MovieCard.css';

const MovieCard = ({ title, year, image, overview }) => {
  const [movies, setMovies] = React.useState([]);

  const api_key = process.env.API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.post('https://api.themoviedb.org/3/movie/api_key=${api_key}');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="movie-card">
      <img src={movies.image} alt={movies.title} className="movie-card-image" />
      <div className="movie-card-content">
        <h3 className="movie-card-title">{movies.title}</h3>
        <p className="movie-card-year">{movies.year}</p>
        <p className="movie-card-description">{movies.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;