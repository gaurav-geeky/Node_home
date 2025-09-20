const http = require('http'); 
const Student = require('./bhopal'); 


http.createServer((req, res)=> {
    res.write("<h1 style='color: red; background-color: yellow; '> this is our first server without any help </h1>") 
    res.write( ` my college name was : ${Student.myCollege()}` ); 
    res.end("<h3> Server ends here </h3>"); 
}).listen(7700, ()=> {
    console.log("hello my server runs at 7700"); 
}); 


//   every module wheater   in-build,  third party,  user-defined   it will be used by   require method. 

