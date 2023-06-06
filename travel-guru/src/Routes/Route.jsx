import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Order from '../Components/Order/Order';
import PrivateRoute from './PrivateRoute';
import Destination from '../Components/Destination/Destination';


export const route = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/booking',
                element: <Order/>
            },
            {
                path: '/destination',
                element: <PrivateRoute><Destination></Destination></PrivateRoute>,
                // loader: () => fetch('https://travel-guru-server-three-gamma.vercel.app')
            }
        ]
    }
])

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;