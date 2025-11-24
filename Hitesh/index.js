require('dotenv').config()

const express = require('express') 

const app = express() 

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res)=> {
    res.send("hitesh chaudhary's node js twitter page. ")
})

app.get(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 

app.get('/login', (req, res)=> {
    res.send('<h1> please  log in  chai code. </h1> ')
})

app.get('/youtube', (req, res)=> {
    res.send('<h2> get chai code on youtube. </h2>')
})
app.listen( process.env.PORT, ()=> {
    console.log(`app listenig on port ${port} no. `)
})



/* 
first we import express using require    require module syntax. 

import exp from "express"   common js    both applicable. styles 

const app = express()___ variable me  express use kiya.  
like Math.methods  . 

ln 5   port banaya where server listens.  app listen krega ab.

now app listen karo  ' / '  pe .  if req comes then call back denge res.... (too many type res)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
  res.send('Hello World!')
})

listen power come from app because app made of express. 



*/

/* 
after run .  imp  YOUr app not close becaue  app is constantly listening.
On console.log terminate  

*/







/*
 after making appliation     
 prod grad app  deploy   imp imp     sp var 

a.    dot env
*/