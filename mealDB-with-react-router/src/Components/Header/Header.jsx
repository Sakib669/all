import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

const Header = () => {


    return (
        <nav className='mb-10'>
            <Link className='mr-3' to='/'>Home</Link>
            <Link className='mr-3' to='/foods'>Foods</Link>
            <Link className='mr-3' to={'/rice'}>Rice</Link>
        </nav>
    );
};

export default Header;