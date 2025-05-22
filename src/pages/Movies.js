import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import axios from 'axios';
import '../styles/Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch movies from server
  const fetchMovies = async (page = 1) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/movies/popular?page=${page}`);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  // Fetch movies when the page loads or page number changes
  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  // Handle page click (e.g., Next, Previous)
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="movies-page">
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            overview={movie.overview}
            rating={movie.vote_average}
          />
        ))}
      </div>

      {/* Pagination controls */}
      <div className="pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
        >
          Previous
        </button>
        <span className="pagination-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
