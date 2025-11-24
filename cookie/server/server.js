
const express = require("express");
const app = express();
// const cors = require("cors");
// require("dotenv").config();
// const bodyparser = require('body-parser');
// const StuRoute = require("./routes/stuRoute");
// const multer = require("multer"); //           multer file upload

// cookie parser 
const cookieParser = require("cookie-parser");




// add cookie parser 
app.use(cookieParser());

app.get("/cookie", (req, res) => {
  res.cookie("name", "shiny singh", { expire: 1000 * 3 })
  res.cookie("age", 34, { expire: 1000 * 3 })
  res.cookie("city", "delhi", { expire: 1000 * 3 })
  res.cookie("fees", 34800, { expire: 1000 * 3 })
  res.send("cookie created ...");
})

app.get("/getcookie", (req, res) => {
  console.log(req.cookies);
  const { name, age, city, fees } = req.cookies; 
  res.send("Cookies get..")
})

app.get("/deletecookie", (req, res) => {
  res.clearCookie("age"); 
  res.clearCookie("name"); 
  res.send("Your cookies delted .."); 
})






/////////// 


app.listen(8999, () => {
  console.log(`server run on port `);
});

