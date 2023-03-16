

import {createBrowserRouter} from 'react-router-dom';
import DashBowrdLeayOut from '../../leayOut/Main/DashBowrdLeayOut';

import Main from '../../leayOut/Main/Main';
import AppoinmentOne from '../../pages/Appoinmentone/AppoinmentOne/AppoinmentOne';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import Myappoinment from '../../pages/Shards/footer/dhasebord/Myappoinment/Myappoinment';

import SignUp from '../../pages/SignUp/SignUp';
import PribateRoute from '../PribateRoute/PribateRoute';
export const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
              path:'/aappoinmentone',
              element:<AppoinmentOne></AppoinmentOne>
            }
        ]

    },
    {
      path:'/dashbowrd',
      element:<PribateRoute><DashBowrdLeayOut></DashBowrdLeayOut></PribateRoute>,children:[
        {
            path:'/dashbowrd',
            element: <Myappoinment></Myappoinment>,
        }
      ]
    }
])