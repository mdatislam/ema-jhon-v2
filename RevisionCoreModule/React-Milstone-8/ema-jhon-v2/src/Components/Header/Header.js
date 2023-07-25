import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <nav className='Navbar'>
                <img src={logo} alt="" />
                <div>
                    
                    <Link to='/Shop'>Shop</Link>
                    <Link to='/Order'>Order</Link>
                    <Link to='/Inventory'>Inventory</Link>

                </div>
            </nav>

        </div>
    );
};

export default Header;