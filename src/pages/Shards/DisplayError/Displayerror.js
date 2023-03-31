import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';

const Displayerror = () => {
    const error =useRouteError();
    const navigate=useNavigate()
    const { LogOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        LogOut()
        .then(()=> {
            navigate('/login')
        })
        .catch(e => console.log(e))
  }
    return (
        <div>
            <h1>Display Error</h1>
            <p className='text-red-500'>Something want wrong!!!</p>
            <p className='text-red-500'>{error.statusText || error.message} </p>
            <h3 className="text-3xl">pleas 
            <button onClick={handleLogOut} className='btn btn-outline font-bold'>
                LogOut</button>you are login back!</h3>
        </div>
    );
};

export default Displayerror;