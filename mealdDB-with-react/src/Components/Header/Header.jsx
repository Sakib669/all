import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="navbar">
                <img src="../../../public/mealDB-logo.png" alt="" />

                <ul>
                    <li><a href="">Order</a></li>
                    <li><a href="">Order Review</a></li>
                    <li><a href="">Manage Inventory</a></li>
                    <li><a href="">Login</a></li>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;