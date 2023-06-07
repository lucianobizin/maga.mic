import './FrontPage.css'
import frontpage from './frontpage.jpg'
import { useState } from 'react';


const FrontPage = () => {


    const goToMarket = () => {
        window.location.href = "/market";
    };


    const [isHovered, setIsHovered] = useState("");

    const handleMouseEnter = () => {
        setIsHovered('dark-gradient');
    };

    const handleMouseLeave = () => {
        setIsHovered('frontpage-image');
    };


    return (
        <div>
            <img className={isHovered}
                src={frontpage} alt='A tarot deck with a astrological chart book' />
            <button className='market-button' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} 
            onClick={goToMarket}>Go to Market</button>
        </div>
    );

}

export default FrontPage