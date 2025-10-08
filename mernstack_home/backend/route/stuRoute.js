const express = require('express');
const route = express.Router();
const stucontroller = require('../controller/stuController');

route.get('/home', stucontroller.HomePage)
route.post('/save', stucontroller.data);
route.get('/display', stucontroller.displayPg); 

module.exports = route
