import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/blog">Blog</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
            <li>
            <a href="/product">Product</a>
            </li>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}

export default Navbar