import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            }
        ]
    }
])
const AppRouterTwo = () => {
  return <RouterProvider router={router}/>
}

export default AppRouterTwo;