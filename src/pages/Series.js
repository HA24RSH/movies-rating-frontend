import react from 'react';
import SeriesCard from '../components/SeriesCard';
import '../styles/Series.css';

const Series = () => {
    const series = [
        {
            title: 'Breaking Bad',
            year: 2008,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBmR1UfShiKt6vY3J9tjztfpJvB7qM3xIQ_-TUF25_zZYzoTfz',
            description: 'A high school chemistry teacher turned methamphetamine manufacturer.'
        },
        {
            title: 'Game of Thrones',
            year: 2011,
            image: 'https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg',
            description: 'Nine noble families fight for control over the lands of Westeros.'
        },
        {
            title: 'Stranger Things',
            year: 2016,
            image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQWPh6PeuTgtO_Zzmap6eXJrwBro7Rpz-VOBSqo_7j1-CW9rmEhD0fGArmbXSoWphgcr4ml',
            description: 'A group of kids uncover a series of supernatural mysteries in their town.'
        }
    ];
    
    return (
        <div className="series-page">
            <div className="series-grid">
                {series.map((series, index) => (
                    <SeriesCard
                        key={index}
                        title={series.title}
                        year={series.year}
                        image={series.image}
                        description={series.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Series;