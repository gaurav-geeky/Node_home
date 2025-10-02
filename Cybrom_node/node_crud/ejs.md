# res.render("home", { message: "Yes, data received!" });


You are not magically sharing variables between files.

What’s happening is:

Express uses the EJS templating engine.

The second argument { message: "Yes, data received!" } is just a JavaScript object.

Express gives that object to EJS.

Inside home.ejs, all the keys of the object (message) become available as variables.














  server js file
  
const express = require('express'); 
const app = express(); 
const actorRoute = require('./routes/actorRoute'); 
const bodyparser = require("body-parser"); //
const mongoose = require('mongoose'); //


mongoose.connect("mongodb://127.0.0.1:27017/actorMongoDB").then(()=> {
    console.log("yes mongo connected success....."); 
}) // 

app.use(bodyparser.urlencoded({extended: true}));  //
app.use(bodyparser.json()); 


app.set("view engine", "ejs")

app.use('/actor', actorRoute ); 

app.listen(4500, ()=> {
    console.log("our server runs at  4500   ..."); 
}) 
 route js file
const express = require('express'); 
const route = express.Router(); 
const actorControll = require('../controllers/actorController');  

route.get('/home', actorControll.homePg); 
route.get('/form', actorControll.formPg); 
route.post('/data', actorControll.dataPg)

module.exports = route;   
  form
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>form page</title>
</head>
<body bgcolor="lightblue">

    <a href="/actor/home"> HOME </a>  | 
    <a href="/actor/form"> FORM </a> 

    <h1> this is our actors page form</h1>

    <form action="/actor/data" method="post">

        name: <input type="text" name="name"> <br> <br> 
        age: <input type="text" name="age"> <br> <br> 
        city: <input type="text" name="city"> <br> <br>  
        height: <input type="text" name="height"> <br> <br>  

        <button> submit </button>
    </form>
    
</body>
</html> 
 controller file 
const actorModel = require('../models/actorModel');

const homePg = (req, res) => {
    res.render("home", { message: null });  // to show message is null when form is not submitted....
}

const formPg = (req, res) => {
    res.render("form");
}

// we need to use  res.send (only 1 time if 2 time throw ERROR in shell)

const dataPg = (req, res) => {
    console.log(req.body);
    // res.render("home", { message: "Yes, data received!" });
    
    const { name, age, city, height} = req.body;
    actorModel.create({
        name: name, 
        age:age, 
        city : city, 
        height : height, 
    })
    res.render("home", { message: "Yes, data received!" });
}

// to print this MSJ  <%=  message  %>  use this .....

module.exports = {
    homePg,
    formPg,
    dataPg
}  
  model of mongoose 
const mongoose = require('mongoose'); 

const actorSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    city: String, 
    height: Number

})
module.exports = mongoose.model("actorData", actorSchema); 

in this node js code I have use get and post method  I want to use put and delete method also please generate code with update and delete method 







