const http = require('http'); 

const server = http.createServer((req, res)=> {
    res.write(" <p> hey hello <p> </br>"); 
    res.end("server end"); 
})

server.listen(9009, ()=> {
    console.log("server end"); 
}) 
