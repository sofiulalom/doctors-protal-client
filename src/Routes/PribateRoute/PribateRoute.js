import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../pages/AuthProvider/Authprovider';

const PribateRoute = ({children}) => {
    const {user,lowading}=useContext(AuthContext)
    const location=useLocation()
    if(lowading){
        <progress className="progress w-56"></progress>
    }
    if(user){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate> ;
};

export default PribateRoute;