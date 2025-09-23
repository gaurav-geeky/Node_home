const express = require('express'); 
const path = require('path'); 
const formRoute = require("./routes/formRoutes"); 

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// server static files so 
app.use(express.static(path.join(__dirname, "public"))); 

app.use("/", formRoute); 

app.listen(8989, ()=> {
    console.log("server successfull..."); 
});

/* here I want to use middleware  app.use("/form", formRoute); 
then I have to give path    /form /submit    in  HTML FORM also.
*/



// const express = require("express");
// const path = require("path");
// const formRoutes = require("./routes/formRoutes");

// const app = express();
// const port = 3000;

// // Middleware to parse form data
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Serve static files (HTML, CSS, JS from "public" folder)
// app.use(express.static(path.join(__dirname, "public")));

// // Use routes
// app.use("/", formRoutes);

// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });


