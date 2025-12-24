import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import Product from '../pages/Product'
import Header from '../Layout/Header'
import SignIn from '../pages/SignIn'
import Profile from '../pages/Profile'
import NotFoundPage from '../pages/NotFoundPage'
import ProductDetails from '../components/ProductDetails'


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
                    path: '/signin',
                    element:<SignIn />

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
                    path: '/product-details/:id',
                    element:
                    <ProductDetails />
                },
                {
                    path: '/profile',
                    element:<Profile />
                },
                {
                    path: '*',
                    element: <NotFoundPage />
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