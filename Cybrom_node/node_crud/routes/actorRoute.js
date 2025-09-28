const express = require('express'); 
const route = express.Router(); 
const actorControll = require('../controllers/actorController');  

route.get('/home', actorControll.homePg); 
route.get('/form', actorControll.formPg); 
route.post('/data', actorControll.dataPg)

module.exports = route; 

