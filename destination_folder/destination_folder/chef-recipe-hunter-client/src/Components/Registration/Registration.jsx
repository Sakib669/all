import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const {createUser, notify} = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here, for example using Firebase authentication

    createUser(email,password)
    .then(result => {
      const loggedUser = result.user;
      loggedUser.displayName = name;
      loggedUser.photoURL = photoUrl;
      console.log(loggedUser);
    })
    .catch(err => {
      notify(err.message);
    })
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <form className="mx-auto my-auto p-6 grid grid-cols-2 gap-4 bg-white rounded-lg shadow-lg" onSubmit={handleSubmit} >
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Password</label>
          <input type="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div>
          <label className="block font-medium text-gray-700">Photo URL</label>
          <input type="url" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" onChange={(e) => setPhotoUrl(e.target.value)} value={photoUrl} />
        </div>
        <div className="col-span-2">
          <button type="submit" className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Register
          </button>
          <p><small>Already User <Link to='/login' className='text-indigo-600 underline'>Login</Link></small></p>
        </div>
      </form>
    </div>
  );
}

export default Registration;
