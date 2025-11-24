
const mongoose = require("mongoose");
const stuSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
})
module.exports = mongoose.model("student", stuSchema);
