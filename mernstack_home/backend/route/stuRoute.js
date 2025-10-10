const express = require('express');
const route = express.Router();
const stucontroller = require('../controller/stuController');


route.get('/home', stucontroller.HomePage)
route.post('/save', stucontroller.dataSave);
route.get('/display', stucontroller.displayPg); 
route.post('/search', stucontroller.dataSearch); 

route.put('/displayupdate', stucontroller.displayUpdatePg); 
route.post('/updatedelete', stucontroller.updateDelete); 

route.post('/updateEdit', stucontroller.updateEditPg); 
route.post('/editSave', stucontroller.editSavePg); 


module.exports = route 

