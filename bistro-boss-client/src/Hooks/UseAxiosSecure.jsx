import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './UseAuth';

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/',
  });

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;

        }
        return config;
      }
    );

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [axiosSecure, navigate, logOut]);

  return [axiosSecure];
};

export default useAxiosSecure;
