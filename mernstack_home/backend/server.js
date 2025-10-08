const express = require('express'); 
const app = express(); 
const route = require('./route/stuRoute'); 
const bodyparser = require('body-parser'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 

mongoose.connect('mongodb://127.0.0.1:27017/nodeData').then(()=> {
    console.log("db connected successfully....."); 
}); 

app.use(cors()); 

// middleware
app.use(bodyparser.urlencoded({extended: true})); 
app.use(bodyparser.json()); 

app.use("/", route)

app.listen(9000, ()=> {
    console.log("server 9000 is succeed...."); 
})