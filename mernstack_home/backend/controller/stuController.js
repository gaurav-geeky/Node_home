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

const displayPg = async (req, res)=> {
    const myData = await stuModel.find(); // get data from DB
    res.send(myData)  // send DB data // react me kro .. 
    console.log("ok data is send to react") 
}

module.exports = {
    HomePage,
    data, 
    displayPg
}
