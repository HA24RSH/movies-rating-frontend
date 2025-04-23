import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to EIGA</h1>
          <p>Discover top-rated Movies, Series, and Anime. Stay updated. Rate your favorites. All in one place.</p>
          <a href="/movies" className="cta-button">Explore Now</a>
        </div>
      </section>

      <section className="categories">
        <h2>Browse Categories</h2>
        <div className="category-cards">
          <div className="card">
            <img src="https://i.imgur.com/3fJ1P48.jpg" alt="Movies" />
            <h3>Movies</h3>
            <p>Explore the top-rated and trending movies across genres.</p>
            <Link to="/movies" className="card-link">Go to Movies →</Link>
          </div>
          <div className="card">
            <img src="https://i.imgur.com/OB0y6MR.jpg" alt="Series" />
            <h3>Series</h3>
            <p>Binge-worthy series from around the world curated for you.</p>
            <Link to="/series" className="card-link">Go to Series →</Link>
          </div>
          <div className="card">
            <img src="https://i.imgur.com/9vnLXcz.gif" alt="Anime" />
            <h3>Anime</h3>
            <p>Dive into the universe of top-rated anime and latest releases.</p>
            <Link to="/anime" className="card-link">Go to Anime →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
