import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.error(err.message));
    }

    return (
        <div className='header mb-14 py-16  px-40'>
            <section className='flex justify-between items-center'>
            <nav className=' text-xl font-bold text-white'>
                <Link className='mr-4' to='/'>Home</Link>
                <Link className='mr-4' to='/login'>Login</Link>
                <Link className='mr-4' to='/register'>Register</Link>
                <Link className='mr-4' to='/bookings'>Bookings</Link>
            </nav>
            {
                user &&
                <div className='flex items-center'>
                    <p className='font-bold text-white tex-2xl'>
                        {user?.displayName}
                    </p>
                    <button className="btn btn-secondary"
                    onClick={handleLogOut}>
                            Sign Out
                    </button>
                </div>
            }
            </section>
            <div className='text-center text-white'>
                <h2 className='text-5xl my-3 font-bold'>Burj Al Arab</h2>
                <p className='font-bold text-lg'>Welcome to Out Website</p>
            </div>
        </div>
    );
};

export default Header;