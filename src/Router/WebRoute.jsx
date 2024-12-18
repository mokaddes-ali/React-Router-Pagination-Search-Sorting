import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Product from '../pages/Product'
import Header from '../Layout/Header'


const WebRoute = () => {
    const routes = createBrowserRouter ([
        {
            path: '/',
            element: <Header />,
            children: [
                {
                    path: '/',
                    element: <Home />

                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: '/blog',
                    element: <Blog />
                },
                {
                    path: '/product',
                    element: <Product />
                },
                {
                    path: '*',
                    element: <div>This Path Not Found</div>
                },

            ]
                
        },
       
    ])
  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default WebRoute