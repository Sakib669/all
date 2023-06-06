import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/logo.png';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    // console.log(user);

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(err => alert(err.message));
    }

    return (
        <div className='px-28 py-5 mb-20'>
            <div className="navbar bg-base-100 ">
                <div className="flex-1">
                    <Link className="btn btn-ghost normal-case text-xl">
                        <img src={NavLogo} className="h-14 w-28" />
                    </Link>
                </div>
                <div className="flex-none ">
                    <ul className=" menu-horizontal px-1 items-center">
                        <li className='  rounded-lg mr-2 hover:bg-yellow-500 p-1'><Link to='/'>Home</Link></li>
                        <li className='  rounded-lg mr-2 hover:bg-yellow-500 p-1'><Link to='/destination'>Destination</Link></li>
                        <li className='  rounded-lg mr-2 hover:bg-yellow-500 p-1'><Link to='/booking'>Book</Link></li>
                        <li className='  rounded-lg mr-2 hover:bg-yellow-500 p-1'><Link>Contact</Link></li>
                        <li ><Link to='/login'>Login</Link></li>
                        {user && <li className='font-extrabold text-xl ms-3 text-yellow-500' >{user.email}</li>}
                        {user && <button onClick={handleLogOut} className='text-xl ms-3 text-yellow-500' >Log Out</button>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;