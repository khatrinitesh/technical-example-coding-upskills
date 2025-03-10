import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import { createBrowserRouter } from 'react-router-dom';

const AppRoutes = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
    },
    {
        path:"/about",
        element:<About/>,
    },
])

export default AppRoutes;
