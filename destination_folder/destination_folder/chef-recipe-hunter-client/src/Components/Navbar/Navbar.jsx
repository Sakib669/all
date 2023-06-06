import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {

  const { user, logOut, notify } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(err => notify(err.message));
  }

  return (
    <div className="navbar bg-base-300 rounded px-4 md:px-14">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case font-semibold hover:bg-purple-500 text-2xl">Special <span className='text-purple-600 hover:text-white ms-2'> Chef</span></Link>
      </div>
      <div className="md:flex-none flex-col md:flex-row gap-2">
        <ul className="menu menu-horizontal md:flex md:items-center md:justify-center px-1">
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
        {user && (
          <div className="md:flex-none flex md:items-center">
            <img className='w-10 rounded-2xl' title={user?.displayName} src={user?.photoURL} />
            <button onClick={handleLogout} className="btn btn-secondary ml-2">Sign Out</button>
          </div>
        )}
      </div>
    </div>

  );
};

export default Navbar;