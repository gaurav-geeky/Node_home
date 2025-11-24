// const http = require('http'); 

// const server = http.createServer((req, res)=> {
//     res.write(" <p> hey hello <p> </br>"); 
//     res.end("server end"); 
// })

// server.listen(9009, ()=> {
//     console.log("server end"); 
// }) 

const express = require('express'); 
const app = express(); 

//  shertians.com/  profile :  part after domain is routes
// we can create route here. 


// jab vi server req accept krt ha waha se route k pass pahuchne tk agar aap req ko beech me rokte ho aur kuchh perofrm krte ho toh ye element middlware hota hai. 

app.use(express.json());  // obj ko read karo. 


app.use(express.urlencoded({extended: true}));   // 
// jab FE pe data likha wo url encoded me jayega. & 
// to show it on backend this line

app.get("/about", (req, res)=>{
    res.send("hello about")
}) ;

app.get("/service", (req, res)=>{
    res.send("hello service")
}) 

app.get("/profile", (req, res, next)=>{
    // res.send("hello profile page shery ians")
    return next(new Error("someing  not written send in prfiel"));
}) 

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(9000, ()=> {
    console.log("server 9000")
})

