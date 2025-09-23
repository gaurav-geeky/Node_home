const express = require('express'); 
const app = express();
const stuRoute = require('./routes/studentRoute')
const empRoute = require('./routes/employeeRoute')


app.use("/students", stuRoute)
app.use("/employees", empRoute)

app.listen(9000, ()=> {
    console.log("our server runs at 9000 port....."); 
})
