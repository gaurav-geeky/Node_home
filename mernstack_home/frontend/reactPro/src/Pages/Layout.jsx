import React from 'react'
import { Outlet, Link } from 'react-router-dom'

function Layout() {
    return (
        <>

            <nav style={{ display: 'flex', gap: '10px', }}>
                <Link style={{ color: 'red', textDecoration: 'none' }} to="/">Home</Link>
                <Link style={{ color: 'blue', textDecoration: 'none' }} to="/form">Form</Link>
                <Link style={{ color: 'blue', textDecoration: 'none' }} to="/display">Display</Link>
                <Link style={{ color: 'red', textDecoration: 'none' }} to="/search">Search</Link>
                <Link style={{ color: 'red', textDecoration: 'none' }} to="/update">Update</Link>
            </nav>

            <Outlet />

            <footer>
                <h3>footer page copywrite etc...</h3>
            </footer>

        </>
    )
}

export default Layout
