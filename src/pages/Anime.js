import react from 'react';
import AnimeCard from '../components/AnimeCard';
import '../styles/Anime.css';

const Anime = () => {
    const animes = [
        {
            title: 'Attack on Titan',
            year: '2013',
            image: 'https://www.anime-planet.com/images/anime/cover/1.jpg',
            description: 'In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, the story follows Eren Yeager and his friends who join the military to fight against the Titans.',
        },
        {
            title: 'Death Note',
            year: '2006',
            image: 'https://www.anime-planet.com/images/anime/cover/2.jpg',
            description: 'A high school student discovers a supernatural notebook that allows him to kill'
        }
    ]

    return (
        <div className="anime-page">
            <h1>Movies</h1>
            <div className="anime-grid">
                {animes.map((anime, index) => (
                    <AnimeCard
                        key={index}
                        title={animes.title}
                        year={animes.year}
                        image={animes.image}
                        description={animes.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Anime;