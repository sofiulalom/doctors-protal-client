import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabver from '../../pages/Home/Nabver/Nabver.js';
import Footer from '../../pages/Shards/footer/Footer';

const Main = () => {
    return (
        <div>
            <Nabver></Nabver>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;