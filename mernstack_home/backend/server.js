const express = require('express');
const app = express();
const route = require('./route/stuRoute');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/nodeData').then(() => {
    console.log("db connected successfully.....");
});

app.use(cors());

// middleware
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// app.use("/", route)

// it is a middleware which is a function 
app.use((req, res, next) => {
    console.log("I am app level middlewarre");
    next();
})

app.use((req, res, next) => {
    console.log("2nd main middleware");
    next();
})



app.get("/home",
    (req, res, next) => {
        console.log("this is path of home , middleware");
        next();
    },
    (req, res, next) => {
        console.log("home page node");
        res.send("home page node from react"); 
        next(); 
    })

app.get("/about", (req, res) => {
    console.log("About page node");
    res.send("About page from react");
})

app.get("/service", (req, res) => {
    console.log("SERVICE page node");
    res.send("SERVICE page node from react");
})

app.use((req, res, next) => {
    console.log("last main level middleware");
    next();
})


app.listen(9000, () => {
    console.log("server 9000 is succeed....");
})