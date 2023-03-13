

import {createBrowserRouter} from 'react-router-dom';
import Main from '../../leayOut/Main/Main';
import AppoinmentOne from '../../pages/Appoinmentone/AppoinmentOne/AppoinmentOne';


import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import DhaseBowrd from '../../pages/Shards/footer/dhasebord/DhaseBowrd';
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
      path:'/dhasebowrd',
      element:<PribateRoute><DhaseBowrd></DhaseBowrd></PribateRoute>,
    }
])