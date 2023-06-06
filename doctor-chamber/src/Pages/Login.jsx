import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {login, setUser} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(`Username: ${username} Password: ${password}`);

    login(username, password)
    .then(result => {
      const loggedInUser = result.user;
      setUser(loggedInUser);
    })
    .catch(err => alert(err.message))

  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white rounded-lg p-8  w-3/4 mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border-2 border-gray-400 rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-400 rounded-lg p-2 w-full"
            />
          </div>
          <p><small>New here? <Link to='/register' className='underline text-blue-700'>Register</Link></small></p>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;