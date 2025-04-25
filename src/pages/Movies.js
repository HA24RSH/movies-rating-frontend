import React from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import '../styles/Movies.css';

const Movies = () => {
    const [movies, setMovies] = React.useState([]);


    return (
        <div className="movies-page">
            <div className="movies-grid">
                {movies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        title={movie.title}
                        year={movie.year}
                        image={movie.image}
                        description={movie.overview}
                    />
                ))}
            </div>
        </div>
    );
};

export default Movies;