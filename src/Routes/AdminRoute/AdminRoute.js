import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hocke/useAdmin';
import { AuthContext } from '../../pages/AuthProvider/Authprovider';

const AdminRoute = ({children}) => {
    const {user,lowading}=useContext(AuthContext)
    
    const [isAdmin, isAdminLowading]=useAdmin(user?.email)
    const location=useLocation();
    if(lowading || isAdminLowading){
     return  <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace ></Navigate> ;
};

export default AdminRoute;