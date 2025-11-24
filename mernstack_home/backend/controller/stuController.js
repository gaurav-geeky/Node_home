const stuModel = require('../model/stuModel');

const HomePage = (req, res) => {
    res.send("<h1> Home page of student data in NODE backend</h1>")
}

const dataSave = (req, res) => {
    console.log(req.body); // to show data on terminal
    const { nm, rn, ct, fe } = req.body;
    const student = stuModel.create({
        name: nm,
        rollno: rn,
        city: ct,
        fees: fe,
    })
    res.send(student)
}

const displayPg = async (req, res) => {
    const myData = await stuModel.find(); // get data from DB
    res.send(myData)  // send DB data on screen // react me fill kro  .. 
    console.log("ok data is send to react")  // show data in clg terminal
}

const dataSearch = async (req, res) => {
    const { newkey } = req.body;
    const stData = await stuModel.find({ rollno: newkey }); // searching
    console.log(stData);
    res.send(stData);
}

const displayUpdatePg = async (req, res) => {
    const stuData = await stuModel.find();
    res.send(stuData);
}

const updateDelete = async (req, res) => {
    const { id } = req.query;
    const newData = await stuModel.findByIdAndDelete(id);
    res.send({ msg: `data OK delete success ... ` });
}
const updateEditPg = async (req, res) => {
    const { id } = req.query;
    const oneData = await stuModel.findById(id);
    console.log(oneData)
    res.send(oneData);
}

const editSavePg = async (req, res) => {
    const { id, name, roll, city, fees } = req.body;
    const stuData = await stuModel.findByIdAndUpdate( 
        id, {
        name: name,
        rollno: roll,
        city: city,
        fees: fees, 
    }); 
    res.send( { msg: "data edit success message"})
}

module.exports = {
    HomePage,
    dataSave,
    displayPg,
    dataSearch,
    displayUpdatePg,
    updateDelete,
    updateEditPg,
    editSavePg,

}
