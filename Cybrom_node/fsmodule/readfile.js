const http = require('http'); 
const fs = require('fs'); 

const server = http.createServer((req, res)=> {
    res.write("<h1> this is our server created using node js </h1>")
    fs.readFile('raj.txt', (err, data)=> {
        if (err) throw err; 
        res.write(`<span style='font-size: 40px; '> our data </span> : ${data}`); 
        res.end()
    })
})

server.listen(3000, ()=> {
    console.log("server runs at port 3k")
}) 


