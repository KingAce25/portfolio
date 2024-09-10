import React, { useState } from 'react';
import './menu.css';
import Hamburger from '../../assets/hamburger.svg'
import Close from '../../assets/close.svg'

const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div id='menu'>
            <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>

                <div className="menu-btn__burger">
                    {
                        menuOpen ? <img src={Close} alt='' onClick={() => setMenuOpen(true)} /> : <img src={Hamburger} alt='' onClick={() => setMenuOpen(false)} />
                    }

                </div>
            </div>


            {
                menuOpen && (
                    <div id="dropdown-menu">
                        <ul>
                            <li><a href="/#hero" onClick={() => setMenuOpen(false)}><b>About</b></a></li>
                            <li><a href="/#portfolio" onClick={() => setMenuOpen(false)}><b>Portfolio</b></a></li>
                            <li><a href="/#skills" onClick={() => setMenuOpen(false)}><b>Skills</b></a></li>
                            <li><a href="/#contact" onClick={() => setMenuOpen(false)}><b>Contact</b></a></li>
                        </ul>
                    </div>
                )
            }

        </div >
    );
};

export default Menu;

