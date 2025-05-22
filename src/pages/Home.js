import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import '../styles/Home.css'; // Add styling for Home page

const Home = () => {
  const [items, setItems] = useState([]);  // Holds combined data of Movies, Series, and Anime
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch Movies, Series, and Anime combined
  const fetchItems = async (page) => {
    try {
      const movieResponse = await axios.get(`http://localhost:5000/api/movies/popular?page=${page}`);
      const seriesResponse = await axios.get(`http://localhost:5000/api/series/popular?page=${page}`);
      const animeResponse = await axios.get(`http://localhost:5000/api/anime/popular?page=${page}`);
      
      const allItems = [
        ...movieResponse.data.results,
        ...seriesResponse.data.results,
        ...animeResponse.data.results,
      ];
      
      setItems(allItems);
      setTotalPages(Math.max(movieResponse.data.total_pages, seriesResponse.data.total_pages, animeResponse.data.total_pages));
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Handle Search input and filter the data
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle Pagination change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchItems(currentPage);
  }, [currentPage]);

  return (
    <div className="home-page">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Movies, Series, or Anime..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="content-grid">
        {items.filter(item => 
          item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
          item.name && item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.original_title && item.original_title.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((item, index) => (
          <MovieCard
            key={index}
            title={item.title || item.name || item.original_title}
            year={item.release_date ? item.release_date.split('-')[0] : 'N/A'}
            image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            overview={item.overview}
            rating={item.vote_average}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        )}
        <span>Page {currentPage} of {totalPages}</span>
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Home;
