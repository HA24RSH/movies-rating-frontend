import React from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/Movies.css';

const Movies = () => {
    const movies = [
        {
            title: 'The Last of Us',
            year: '2023',
            image: 'https://m.media-amazon.com/images/M/MV5BYWI3ODJlMzktY2U5NC00ZjdlLWE1MGItNWQxZDk3NWNjN2RhXkEyXkFqcGc@._V1_.jpg',
            description: 'Tasked with escorting a teenager across a post-apocalyptic world, a dreaded smuggler joins hands with a young apprentice to fulfil the mission unscathed.',
        },
        {
            title: '(500) Days of Summer',
            year: '2009',
            image: 'https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p193428_p_v8_bb.jpg',
            description: 'Tom revisits the approximate one year he shared with Summer, the girl he thought he could spend the rest of his life with. She, on the other hand, does not believe in relationships or boyfriends.',
        },
        {
            title: 'Ok Jaanu',
            year: '2017',
            image: 'https://m.media-amazon.com/images/M/MV5BMzFhN2Y2YzUtOWYyMC00MjkwLTk3OGEtOTlhMDQxZWFlMTg0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
            description: 'Adi and Tara are ambitious people who fall in love after meeting at a wedding. They decide on a no-strings-attached live-in relationship but doubt their decision when their careers pull them apart.',
        },
        {
            title: 'Inception',
            year: '2010',
            image: 'https://m.media-amazon.com/images/I/51s+4e+9X-L._AC_.jpg',
            description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        },
        {
            title: 'Interstellar',
            year: '2014',
            image: 'https://m.media-amazon.com/images/I/71n9mHf+uKL._AC_SY679_.jpg',
            description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
        },
        {
            title: 'The Dark Knight',
            year: '2008',
            image: 'https://m.media-amazon.com/images/I/51k0qa5VbHL._AC_.jpg',
            description: 'When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        },
        {
            title: 'Parasite',
            year: '2019',
            image: 'https://m.media-amazon.com/images/I/91s+9b9X-L._AC_SY679_.jpg',
            description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        },
        {
            title: 'Avengers: Endgame',
            year: '2019',
            image: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
            description: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.',
        },
    ];

    return (
        <div className="movies-page">
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