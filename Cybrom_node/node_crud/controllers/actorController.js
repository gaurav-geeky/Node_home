
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

    const { name, age, city, height } = req.body;
    actorModel.create({
        name: name,
        age: age,
        city: city,
        height: height,
    })
    res.render("home", { message: "Yes, data received!" });
}

// to print this MSJ  <%=  message  %>  use this .....
const displayPg = async (req, res) => {
    const Actorinfo = await actorModel.find();
    res.render("display", { Data: Actorinfo });
}

const searchPg = (req, res) => {
    res.render("search", { Data: [] });
}

const Actorsrch = async (req, res) => {
    const { naam } = req.body;
    const actdetail = await actorModel.find({ name: naam });
    console.log(actdetail);
    res.render("search", { Data: actdetail });
}

const updatePg = async (req, res) => {
    const actdetail = await actorModel.find();
    res.render("update", { Data: actdetail });
}

const deleteDataPg = async (req, res) => {
    const { id } = req.query;
    await actorModel.findByIdAndDelete(id)

    const Actorinfo = await actorModel.find();
    res.render("update", { Data: Actorinfo });
}

const dataEditPg = async (req, res) => {
    const { id } = req.query;
    const Actorinfo = await actorModel.findById(id);
    res.render("edit", { Data: Actorinfo });
}

const saveEditPg = async (req, res) => {
    const { id, name, age, city, height } = req.body; 
    await actorModel.findByIdAndUpdate( id, {
        name: name, 
        age: age, 
        city: city, 
        height: height,
    })

    const actdetail = await actorModel.find() 
    res.render("update", { Data: actdetail }); 
}

module.exports = {
    homePg,
    formPg,
    dataPg,
    displayPg,
    searchPg,
    Actorsrch,
    updatePg,
    deleteDataPg,
    dataEditPg,
    saveEditPg, 

}

