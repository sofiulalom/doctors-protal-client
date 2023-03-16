import React, { useContext,  } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/Authprovider';
import DarkMode from '../Home/darkMode/DarkMode';

const Nabver = () => {
    const { user,LogOut}=useContext(AuthContext);
    const handleLogOut=()=>{
          LogOut()
          .then(()=> {})
          .catch(e => console.log(e))
    }
    const manuItems=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/aappoinmentone'>Appoinment</Link></li>
    <li><Link to='/'>About us</Link></li>
    <li className='ml-2'><Link to='/'>contact us</Link></li>
    { user?.uid?
        
        <>
        
        <li><Link to='/dashBowrd'>DasheBowrd</Link></li>
        <button onClick={handleLogOut} className='btn btn-outline font-bold'>LogOut</button>
      
        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        </>
        
        }
        
        
    </>
    return (
        <div className="navbar bg-white justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {manuItems}
              
            </ul>
          </div>
          <Link className='text-primary font-bold text-2xl' to='/'>Doctors Protal</Link>
        </div>
        <div className="navbar-center hidden lg:flex justify-evenly">
          <ul className="menu menu-horizontal px-1 text-black">
           {manuItems}
          </ul>
        </div>
        <label htmlFor="dashBowrd-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
      </div>
    );
};

export default Nabver;