import react from 'react';
import './Header.css';

function Header(){
    return(
        <div className='header'>
            <navlinks className='nav-links'>
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/anime'>Anime</a></li>
                    <li><a href='/movies'>Movies</a></li>
                    <li><a href='/series'>Series</a></li>
                </ul>
            </navlinks>
        </div>
    )
}

export default Header;