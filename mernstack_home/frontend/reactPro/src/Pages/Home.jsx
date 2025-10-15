import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'


function Home() {

    const hanldeSubmit1 = async ()=> {
        const api = `http://localhost:9000/home`; 
        const response = await axios.get(api); 
        console.log(response.data); 
    }
    
    const hanldeSubmit2 = async ()=> {
        const api = `http://localhost:9000/about`; 
        const response = await axios.get(api); 
        console.log(response.data); 
    }
    const hanldeSubmit3 = async ()=> {
        const api = `http://localhost:9000/service`; 
        const response = await axios.get(api); 
        console.log(response.data); 
    }


    return (
        <>
            <div style={{ height: "90vh", border: "1px solid black" }}>

                <h1> hello this is our Home page react</h1>

                <button onClick={hanldeSubmit1}> clck Home </button>
                <button onClick={hanldeSubmit2}> clck About </button>
                <button onClick={hanldeSubmit3}> clck Service </button>
            </div>
        </>
    )
}

export default Home
