import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        const from = location.state?.from?.pathname || '/';

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from, {replace: true});
        })
        .catch(err => alert(err.message));
    }


    return (
        <div>
            <div className="flex h-screen ">
                <div className="m-auto w-1/3 flex flex-wrap justify-center shadow-2xl rounded-lg">
                    <h1 className="w-full text-4xl tracking-widest font-bold text-center my-6">Login</h1>
                    <form className="m-5 w-full" onSubmit={handleLogin}>
                        <div className="w-full my-6">
                            <input className="p-2 rounded-md bg-gray-300 text-gray-900 w-full focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="email" placeholder="Email" required name='email' />
                        </div>
                        <div className="w-full my-6">
                            <input className="p-2 rounded-md bg-gray-300 text-gray-900 w-full focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50" type="password" placeholder="Password" required name='password' />
                        </div>
                        <p><small>New Here? <Link to='/register' className='text-yellow-500'>Register</Link></small></p>
                        <div className="w-full my-6 flex justify-center">
                            <button type="submit" className="p-2 rounded-md bg-yellow-500 text-white w-3/4">Login</button>
                        </div>
                    </form>
                    <div className="flex justify-evenly w-full my-6">
                        <button className="p-2 rounded-md bg-red-600 hover:bg-red-700 text-white flex items-center">
                            <FaGoogle className="mr-2" />
                            Login with Google
                        </button>
                        <button className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white flex items-center">
                            <FaGithub className="mr-2" />
                            Login with Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;