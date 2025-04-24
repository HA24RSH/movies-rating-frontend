import React from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/Movies.css';

const Movies = () => {
  const movies = [
    {
      title: 'The Last of Us',
      year: '2023',
      image: 'https://i.imgur.com/3fJ1P48.jpg',
      description: 'A post-apocalyptic story of survival and hope.',
    },
    {
      title: 'The Studio',
      year: '2025',
      image: 'https://i.imgur.com/B93K8p6.gif',
      description: 'A behind-the-scenes look at a chaotic film studio.',
    },
    {
      title: 'MobLand',
      year: '2025',
      image: 'https://i.imgur.com/9vnLXcz.gif',
      description: 'A gripping tale of crime and redemption.',
    },
  ];

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            image={movie.image}
            description={movie.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;