import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <nav>
           <Link to='/Home'>Home</Link>
            <Link to='/Country'>Country</Link>
            <a href="/About">About</a>
            </nav> 
        </div>
    );
};

export default Header;