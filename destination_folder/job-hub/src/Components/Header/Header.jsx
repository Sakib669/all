import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='md:mx-28'>
            <div className='flex flex-col md:flex-row items-center justify-between py-6 header'>
            <Link to='/'>
            <h4 className='text-3xl text-black font-bold'>JobHub</h4>
            </Link>
            <div className='flex md:flex-row flex-col'>
                <Link to='/analysis' className='mr-3 text-indigo-500'>Statistics</Link>
                <Link to='/applied-jobs' className='mr-3 '>Applied Jobs</Link>
                <Link to='/blogs' className='mr-3'>Blogs</Link>
            </div>
            <button className='bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white p-4 rounded-lg font-bold'
            >Start Applying</button>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;