import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    
    const { loginUser, forgotPassword, googleLogin } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleLogin = event => {
        event.preventDefault();


        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            form.reset();
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Please Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required
                                name='email'
                                type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                name="password"
                                required 
                                placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <button onClick={forgotPassword} className="label-text-alt link link-hover">
                                        Forgot password?
                                    </button>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-6">
                                <button onClick={handleGoogleLogin} className="btn btn-primary">Google</button>
                            </div>
                        </form>
                        <Link to='/register' className="label-text-alt link link-hover">
                            <button className="btn  btn-link">New to Auth Master?</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;