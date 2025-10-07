import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <>
            <div>

                <div style={{ display: 'flex', gap: '10px',  }} >
                    <Link style={{ color: 'red', textDecoration: 'none' }} to="/">Home</Link>
                    <Link style={{ color: 'blue', textDecoration: 'none' }} to="/form">Form</Link>
                </div>

                <h1> hello this is our Home page react</h1>
            </div>
        </>
    )
}

export default Home
