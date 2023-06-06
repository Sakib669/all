import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(user);

    if(loading){
        return <div>Loading...</div>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={{from:location}}></Navigate>;
};

export default PrivateRoutes;