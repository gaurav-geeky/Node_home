const express = require('express'); 
const route = express.Router(); 
const stuController = require('../controllers/studentController'); 

route.get('/home', stuController.homePage)
route.get('/about', stuController.aboutPage)
route.get('/service', stuController.Servicepage)
route.get('/course', stuController.CoursePage)
route.get('/fees', stuController.Feespage)

module.exports = route; 
