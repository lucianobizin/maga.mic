import './FrontPage.css'
import frontpage from './frontpage.jpg'


const FrontPage = () => {
    const goToMarket = () => {
        window.location.href = "/market";
    };

    return (
        <div>
            <img className="frontpage-image" src={frontpage} />
            <button className='market-button' onClick={goToMarket}>Go to Market</button>
        </div>
    );
};

export default FrontPage