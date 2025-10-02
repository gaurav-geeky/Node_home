   
   
const express = require('express'); 
const route = express.Router(); 
const actorControll = require('../controllers/actorController');  

route.get('/home', actorControll.homePg); 
route.get('/form', actorControll.formPg); 
route.post('/data', actorControll.dataPg); 

route.get('/display', actorControll.displayPg); 

route.get('/search', actorControll.searchPg); 
route.post('/search', actorControll.Actorsrch);  


module.exports = route; 

// display      // search     // delete     // edit 

