const stuModel = require('../model/stuModel');

const HomePage = (req, res) => {
    res.send("<h1> Home page of student data in NODE backend</h1>")
}

const data = (req, res) => {
    console.log(req.body); 
    const { nm, rn, ct, fe} = req.body; 
    const student = stuModel.create({
        name: nm, 
        rollno: rn, 
        city: ct, 
        fees: fe, 
    })
    // res.send("okk data saved");
    res.send(student) 
}

module.exports = {
    HomePage,
    data,
}
