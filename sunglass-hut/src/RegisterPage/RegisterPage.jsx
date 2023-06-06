import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { toast } from 'react-toastify';


const RegisterPage = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const notify = toast();

  const auth = getAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess('');
    setError('');

    const { email, password, confirmPassword } = formData;

    // Perform basic form validation
    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError('Please add at least one uppercase letter.');
      return;
    }

    if (!/(?=.*[0-9])/.test(password)) {
      setError('Please add at least one number.');
      return;
    }

    if (password.length < 6) {
      setError('Please enter at least 6 characters in your password.');
      return;
    }

    // Create user in Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const signedInUser = result.user;
        setError('');
        setFormData({
          email: '',
          password: '',
          confirmPassword: '',
        });
        setSuccess('User has been created successfully.');
        toast(success);

        sendVerificationEmail(result.user);
      })
      .catch((err) => {
        setError(err.message);
        toast(error);
      });
  };

  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
      .then((result) => {
        console.log(result);
        alert('Please verify your email address');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-6">Register</h1>
      <form className=" p-8 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
        <input
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button
          className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          type="submit"
          >
          Register
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {success && <p className="text-green-500 mt-4">{success}</p>}
          <p className="text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500">
          Login
          </Link>
          </p>
          </form>
          </div>
          );
          };
          
          export default RegisterPage;