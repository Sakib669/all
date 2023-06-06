import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <h2>This is Header</h2>
            <Link to={'/'}>Home</Link>
            <Link to={'/review'}>Order Review</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/grandpa'}>Grandpa</Link>
            <Link to={'/contact'}>Contact Page</Link>
        </nav>
    );
};

export default Header;