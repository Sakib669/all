import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { login, loginWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        setError('');
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        if (!passwordRegex.test(password)) {
            setError('Please enter a valid password');
            return;
        }

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
                
            })
            .catch(error => {
                setError(error.message);
                return;
            })
    };


    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
                return;
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button className="label-text-alt link link-hover">Forgot password?</button>
                                </label>
                            </div>
                            <div className="form-control mt-6 ">
                                <button type='submit' className="btn btn-primary text-purple-700 hover:text-white">Login</button>
                            </div>
                        </div>
                        <button
                            onClick={handleLoginWithGoogle}
                            className="w-3/4 mx-auto mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 flex "
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="Google"
                                className="h-6 w-6 mr-2 "
                            />
                            Sign in with Google
                        </button>
                        {error && (
                            <p className="mt-4 text-red-500 text-sm text-center">{error}</p>
                        )}
                        <div className="my-4 text-center">
                            New User? 
                            <Link to="/register" className="text-indigo-500 hover:text-indigo-600">
                                Register Now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;