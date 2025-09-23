const express = require('express'); 
const route = express.Router(); 
const teacherControl = require('../controllers/teacherControl'); 

route.get("/home", teacherControl.home)
 
route.get("/about", teacherControl.about)
 
route.get("/service", teacherControl.service)
 
route.get("/contact", teacherControl.contact)


module.exports = route; 
