import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user]= useAuthState(auth)

    const handleSignOut=()=>{
        signOut(auth)
    }
    return (
        <div>
            <nav className='Navbar'>
                <img src={logo} alt="" />
                <div>
                    
                    <Link to='/Shop'>Shop</Link>
                    <Link to='/Order'>Order</Link>
                    <Link to='/Inventory'>Inventory</Link>
                    <Link to='/Shipment'>Shipment</Link>
                  {  user ?
                  <button onClick={handleSignOut} style={{backgroundColor:"pink", marginLeft:"5px",padding:"5px"}}>Logout</button>
                  :
                  <Link to='/Login'>Login</Link>
                  }
                    

                </div>
            </nav>

        </div>
    );
};

export default Header;