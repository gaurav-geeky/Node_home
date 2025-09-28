  
  
const express = require('express'); 
const app = express(); 
const actorRoute = require('./routes/actorRoute'); 
const bodyparser = require("body-parser"); //
const mongoose = require('mongoose'); //


mongoose.connect("mongodb://127.0.0.1:27017/actorMongoDB").then(()=> {
    console.log("yes mongo connected success....."); 
}) // 

app.use(bodyparser.urlencoded({extended: true}));  //
app.use(bodyparser.json()); 


app.set("view engine", "ejs")

app.use('/actor', actorRoute ); 

app.listen(4500, ()=> {
    console.log("our server runs at  4500   ..."); 
})