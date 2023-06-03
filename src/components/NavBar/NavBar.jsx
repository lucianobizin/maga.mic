import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import navBtnImg from './Navbar_btn.png';
import navBtnClose from './Navbar_btn_cierre.png';
import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [openNavbar, setOpenNavbar] = useState(false);

    const openMenu = () => {
        setOpenNavbar((prevState) => !prevState);
    };

    return (
        <header>
            <Link to={'/'}>
                <h1 className='title'>Maga.Mic</h1>
            </Link>

            <div className='navbar-right'>
                <nav className={openNavbar ? 'open' : ''}>
                    <button className='navbar-close' onClick={openMenu}>
                        <img
                            className='navbar-close--img'
                            src={navBtnClose}
                            alt='Cross button to close NavBar'
                        />
                    </button>
                    <ul>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/Astrology`}>Astrology</NavLink>
                        </li>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/DiceAndRunes`}>DiceAndRunes</NavLink>
                        </li>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/Event`}>Event</NavLink>
                        </li>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/Products`}>Products</NavLink>
                        </li>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/Workshops`}>Workshops</NavLink>
                        </li>
                        <li className='nav-links' onClick={openMenu}>
                            <NavLink to={`/category/Tarot`}>Tarot</NavLink>
                        </li>
                    </ul>
                </nav>

                <button className='navbar-btn' onClick={openMenu}>
                    <img
                        className='navbar-btn--img'
                        src={navBtnImg}
                        alt='Hand holding three tarot cards'
                    />
                </button>

                <CartWidget />
            </div>
        </header>
    );
};

export default NavBar;