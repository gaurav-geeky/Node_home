const express = require('express'); 
const app = express(); 

const stuRoute = require('./routes/studentRoute')

app.use("/student", stuRoute)





// const express = require('express'); 
// const app = express(); 

// app.get("/", (req, res)=>{
//     res.send("<h1> Welcome to Cybrom Bhopal </h1>")
// })

// app.get("/about", (req, res)=>{
//     res.send("<h2> this is About page </h2>")
// })
// app.get("/service", (req, res)=>{
//     res.send("<h3> this is our Service page </h3>")
// })
// app.get("/join", (req, res)=>{
//     res.send("<h4> Join us here </h4>")
// })

// app.get("/contact", (req, res)=>{
//     res.send("<h4> Contact us page </h4>")
// })


app.listen(8888, ()=> {
    console.log("hey server run on 8888....."); 
})


// after that framework using routing
