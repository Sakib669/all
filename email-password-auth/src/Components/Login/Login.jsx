import React, { useRef, useState } from 'react';
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';
import { Link } from 'react-router-dom';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const auth = getAuth(app);
    const emailRef = useRef();


    const handleUsernameChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // validation
        setError('');
        setSuccess('');
        if (!/(?=.*[a-zA-Z])/.test(password)) {
            setError('please enter uppercase and lowercase characters');
            return;
        }
        else if (!/(?=.*[!#$%&?*="])/.test(password)) {
            setError('please add a special characters');
            return;
        }
        else if (password.length < 6) {
            setError('password must be at least 6 characters long');
        }


        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                if (!loggedUser.emailVerified) {
                    alert('email verification failed');
                }
                setSuccess('User login successful');
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }


    const handleResetPassword = event => {
        const email = (emailRef.current.value);
        if(!email){
            alert('Please enter a valid email address to reset your password');
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert('Please check your email')
        })
        .catch(error => {
            console.log(error.message);
            setError(error.message);
        })
    }

    return (
        <div className='mx-auto w-25'>
            <h2>Please Login</h2>
            <div className="">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input
                                    required
                                    type="email"
                                    ref={emailRef}
                                    className="form-control"
                                    id="username"
                                    onChange={handleUsernameChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    required
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                        <p>
                            <small>
                                Forget Password? Please <button className='btn btn-link' onClick={handleResetPassword}>
                                    Reset Password
                                </button>
                            </small></p>
                        <p><small>New to this website? Please<Link to='/register'>Register</Link></small></p>
                        <p className="text-danger">
                            {error}
                        </p>
                        <p className="text-success">
                            {success}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;