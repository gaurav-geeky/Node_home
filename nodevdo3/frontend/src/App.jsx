import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')

      .then((response) => {
        setJokes(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  })

  return (
    <>
      <h1> Chai and full stack | youtube & insta both </h1>
      <p> JOKES : {jokes.length} </p>

      {/* joke array has come   now how to work. */}
      {
        jokes.map((joke, index) => (

          <div key={joke.id}>
            <h3> {joke.title} </h3>
            <p> {joke.content} </p>
          </div>

        ))
        // if map me  {  return also } ,  else  (  )
      }

    </>
  )
}

export default App


//  now erro  CORS   cross origin is differenet so  data is unavailable. 
// 27 : 59

// to solve CORS Error   use proxy in  vite.config.js  &&   more solutions. 


//  **  bad practice  push backend folder  no no no.........



/* 
      app js front end h  ❤️     here to get data backend  

      use axios   inside   useEffect 
      but  full   link     

      do not need full link  ❤️

      
    axios.get('/api/jokes')       // do this  

    now  url  do not  exist   to get  backend data   into  frontend.  

    so now,  erro   404   not found ❤️

    now ❤️ add  PROXY  in   vite.cofig.js  (proxy create react app)    

    proxy add krne se   vite app kahi bhi chale use yahi lagega req  same   server se   aa ri h.  (same origin se request aai hai.) 

    NOw    JOKES : 5  

    NOW  display of jokes _____
*/



/*
BAD PRACTICE :   Middleware    beech me kisi ko rokna 

npm run bhild          dist folder push it in  backend 

use middle ware in server js       serve static asset. 


app.use     for middleware  (express)


*/