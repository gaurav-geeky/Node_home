
const path = require('path'); 
const express = require('express'); 
const fs = require('fs');  
const app = express(); 

app.set("view engine", 'ejs'); 
app.use(express.static(path.join(__dirname, "public")));  




app.get("/home", (req, res)=> {
    fs.readdir(`./files`, (err, files)=> {
        if (err) throw err; 
        // console.log(files)
        res.render("home", {"files": files})  
    })
    
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


