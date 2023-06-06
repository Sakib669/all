import React, { useState } from 'react';
import { FaGoogle, FaTwitter , FaGithub } from 'react-icons/fa';
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from '../firebase.config';
import { ToastContainer, toast } from 'react-toastify';


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Use regex to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      toast(error)
      return;
    }

    // Use regex to validate password format
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        'Password must be at least 8 characters long, contain at least one uppercase letter and one digit'
      );
      toast(error);
      return;
    }
    

    // Perform login logic here
    // ...

    signInWithEmailAndPassword(auth, email, password)
    .then()
    .catch(err => {
        setError(err.message);
        toast(error);
    })
  };

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
        const LoggedInUser = result.user;
        setError('');
    })
    .catch(err => {
        setError(err.message);
    })
  }

  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
        const LoggedInUser = result.user;
        setError('');
    })
    .catch(err => {
        setError(err.message);
    })
  }

  const handleTwitterLogin = () => {
    signInWithPopup(auth, twitterProvider)
    .then(result => {
        const LoggedInUser = result.user;
        setError('');
    })
    .catch(err => {
        setError(err.message);
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full mb-4 p-2 border border-gray-300 rounded"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
            type="submit"
          >
            Login
          </button>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="flex items-center justify-center">
          <button onClick={handleGoogleLogin} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded mx-2">
            <FaGoogle className="mr-2 inline-block" />
            Sign in with Google
          </button>
          <button onClick={handleTwitterLogin} className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded mx-2">
            <FaTwitter className="mr-2 inline-block" />
            Sign in with Twitter
          </button>
          <button onClick={handleGithubLogin} className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded mx-2">
            <FaGithub className="mr-2 inline-block" />
            Sign in with GitHub
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default LoginPage;
