import react from 'react';

const Anime = () => {
    return (
        <div className='anime-page'>
            <h1>Top Rating Animes</h1>
            <div className='anime-content'>
                <div className='anime-card'>
                    <img src='https://www.anime-planet.com/images/anime/cover/1.jpg' alt='Anime 1' />
                    <h2>Attack on Titan</h2>
                    <p>Rating: 9.5</p>
                    
                </div>
            </div>
        </div>
    )
}

export default Anime;