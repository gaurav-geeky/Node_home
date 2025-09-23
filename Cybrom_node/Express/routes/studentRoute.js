const express = require('express'); 
const route = express.Router(); 

route.get("/home", (req, res)=>{
    res.send(" HOme page info of student")
})
route.get("/about", (req, res)=>{
    res.send(" About page of students, each child")
})
route.get("/subject", (req, res)=>{
    res.send(" Students subject Eng, hindi, Math. ")
})
route.get("/fees", (req, res)=>{
    res.send("We charges high fees.")
})

module.exports = route; 

