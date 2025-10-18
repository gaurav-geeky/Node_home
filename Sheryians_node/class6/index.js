
const express = require('express'); 
const app = express(); 

app.set("view engine", 'ejs'); 
const data = ["golu", "ranu", "sanu", "kanu", "pinnu"]; 

app.get("/home", (req, res)=> { 
        res.render("home", {naam: "cybrom" , data: data}); 
})

app.get("/profile/:user", (req, res)=> { // params for name only
    res.send(` Welcome ${req.params.user}`); 
})

app.get("/author/:username/:age", (req, res)=> {  // parma name_age
    res.send(` Welcome ${req.params.username} & age ${req.params.age}`); 
})

app.listen(9000, ()=> {
    console.log("Our server is runing 9000 port"); 
})


