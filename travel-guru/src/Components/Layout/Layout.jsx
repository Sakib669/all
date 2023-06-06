import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Layout.css'
import BgImage from '../../assets/images/Rectangle-1.png';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <section className="container ">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Layout;