import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className='px-16'>
                <h1 className='text-3xl font-bold'>Travel Guru</h1>
                <p className='my-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sapiente mollitia quod earum natus, nostrum, doloremque fugiat dignissimos sint nulla possimus eum sed expedita excepturi.
                </p>
                <Link to='/booking' >
                    <button className='bg-yellow-400 rounded-lg font-semibold flex items-center py-3 px-14 hover:bg-yellow-500'>
                        Book Now
                        <FaArrowRight className='ms-2'/>
                    </button>
                </Link>
            </div>
    );
};

export default Intro;