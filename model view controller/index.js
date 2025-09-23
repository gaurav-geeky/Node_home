const express = require('express'); 
const app = express(); 
const teacherRouting = require('./routes/teacherRoute')

app.set("view engine", "ejs"); 

app.use("/teacher", teacherRouting); 


app.listen(7878, ()=> {
    console.log("our port runs at 7878."); 
})