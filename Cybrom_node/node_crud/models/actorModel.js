 
const mongoose = require('mongoose'); 

const actorSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    city: String, 
    height: Number

})
module.exports = mongoose.model("actorData", actorSchema); 

