

import {createBrowserRouter} from 'react-router-dom';
import Main from '../../leayOut/Main/Main';
import AppoinmentOne from '../../pages/Appoinmentone/AppoinmentOne/AppoinmentOne';
import Home from '../../pages/Home/Home/Home';
export const router=createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
              path:'/aappoinmentone',
              element:<AppoinmentOne></AppoinmentOne>,
            }
        ]

    }
])