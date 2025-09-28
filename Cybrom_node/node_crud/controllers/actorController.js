
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

