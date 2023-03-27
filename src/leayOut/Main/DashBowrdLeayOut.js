import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hocke/useAdmin';
import { AuthContext } from '../../pages/AuthProvider/Authprovider';
import Nabver from '../../pages/Home/Nabver/Nabver';

const DashBowrdLeayOut = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin]=useAdmin(user?.email)
    return (
        <div>
            <Nabver></Nabver>
            <div className="drawer drawer-mobile">
            <input id="dashBowrd-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashBowrd-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                
                <li><Link to='/dashbowrd'>My Appoinment</Link></li>
                { isAdmin && <>
                    <li><Link to='/dashbowrd/allusers'>All users</Link></li>
                    <li><Link to='/dashbowrd/addDoctors'>Add A Doctor</Link></li>
                    <li><Link to='/dashbowrd/manegedoctor'>Mange Doctor</Link></li>
                </>
                    
                 }
                
               
                
                </ul>
            
            </div>
            </div>

           
        </div>
    );
};

export default DashBowrdLeayOut;