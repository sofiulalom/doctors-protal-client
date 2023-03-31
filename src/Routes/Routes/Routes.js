

import {createBrowserRouter} from 'react-router-dom';
import DashBowrdLeayOut from '../../leayOut/Main/DashBowrdLeayOut';

import Main from '../../leayOut/Main/Main';
import AppoinmentOne from '../../pages/Appoinmentone/AppoinmentOne/AppoinmentOne';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import AddDoctors from '../../pages/Shards/AddDoctors/AddDoctors';
import AllUsers from '../../pages/Shards/AllUsers/AllUsers';
import Displayerror from '../../pages/Shards/DisplayError/Displayerror';
import ManegeDoctor from '../../pages/Shards/footer/dhasebord/ManegeDoctor/ManegeDoctor';
import Myappoinment from '../../pages/Shards/footer/dhasebord/Myappoinment/Myappoinment';
import Payment from '../../pages/Shards/footer/dhasebord/Payment/Payment';

import SignUp from '../../pages/SignUp/SignUp';
import AdminRoute from '../AdminRoute/AdminRoute';
import PribateRoute from '../PribateRoute/PribateRoute';
export const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Displayerror></Displayerror>,
        children:[
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
      element:<PribateRoute><DashBowrdLeayOut></DashBowrdLeayOut></PribateRoute>,
      errorElement: <Displayerror></Displayerror>,
      children:[
        {
            path:'/dashbowrd',
            element: <Myappoinment></Myappoinment>,
        },
        {
            path:'/dashbowrd/allusers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute> ,
           
        },
        {
            path:'/dashbowrd/addDoctors',
            element: <AdminRoute><AddDoctors></AddDoctors></AdminRoute>,
           
        },
        {
            path:'/dashbowrd/manegedoctor',
            element: <AdminRoute><ManegeDoctor></ManegeDoctor></AdminRoute>,
           
        },
        {
            path:'/dashbowrd/payment/:id',
            element: <AdminRoute><Payment></Payment></AdminRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/bookings/${params.id}`)
           
        },
      ]
    }
])