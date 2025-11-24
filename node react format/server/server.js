
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const bodyparser = require('body-parser');
const StuRoute = require("./routes/stuRoute");
const multer = require("multer"); //           multer file upload

// cookie parser 
const cookieParser = require("cookie-parser");


mongoose.connect(process.env.DBCONN).then(() => {
  console.log("DB for jwt connected Succesfully!");
})

// add cookie parser 
app.use(cookieParser());

app.get("/cookie", (req, res) => {
  res.cookie("")
})








/////////// 

const port = process.env.PORT || 8999;

app.listen(port, () => {
  console.log(`server run on port ${port}`);
});

