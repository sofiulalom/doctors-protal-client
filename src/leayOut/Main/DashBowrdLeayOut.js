import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabver from '../../pages/Home/Nabver/Nabver';

const DashBowrdLeayOut = () => {
    return (
        <div>
            <Nabver></Nabver>
            <div className="drawer drawer-mobile">
            <input id="dashBowrd-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Outlet></Outlet>
                {/* <label htmlFor="dashBowrd-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashBowrd-drawer" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
                </ul>
            
            </div>
            </div>

           
        </div>
    );
};

export default DashBowrdLeayOut;