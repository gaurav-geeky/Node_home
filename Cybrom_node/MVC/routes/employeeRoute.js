const express = require('express'); 
const route = express.Router(); 
const empController = require('../controllers/employControl'); 

route.get('/home', empController.homePage)
route.get('/about', empController.aboutPage)
route.get('/designation', empController.designationPage)
route.get('/department', empController.departmentPage)
route.get('/salary', empController.Salarypage)

module.exports = route; 
