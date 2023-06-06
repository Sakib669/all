/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { TailSpin } from 'react-loader-spinner';

const PrivateRoute = ({children}) => {
    const location = useLocation();
    console.log(location);
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to='/login'  ></Navigate>;
};

export default PrivateRoute;