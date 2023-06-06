import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Header = () => {

    const {user, signOutUser} = useContext(AuthContext);

    const handleLogOut = () => {
        signOutUser()
            .then(() => {})
            .catch(err => console.log(err.message))
    }

    return (
        <div>
            <div className="navbar bg-primary text-primary-content text-xl font-semibold">
                <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
                <Link className="bg-primary text-primary-content  mr-4" to='/'>Home</Link>
                <Link className="bg-primary text-primary-content  mr-4" to='/orders'>Orders</Link>
                {user && <Link className="bg-primary text-primary-content  mr-4" to='/profile'>Profile</Link>}
                <Link className="bg-primary text-primary-content  mr-4" to='/login'>Login</Link>
                <Link className="bg-primary text-primary-content  mr-4" to='/register'>Register</Link>
                {
                    user ? 
                    <>
                        <span>{user.email}</span>
                        <button onClick={handleLogOut} className="btn btn-xs ms-4">Sign Out</button>
                    </> 
                    : <Link to='login'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;