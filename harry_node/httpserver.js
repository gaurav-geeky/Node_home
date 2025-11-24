const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3300;   //// environment variable

const server = http.createServer((req, res) => {

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is code and Harry Node_js and I am learning http server </h1>  <p>  hey this is the way 2 rock the world. </p>');
    }

    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end("<h1> About page of code harry </h1>  <p> here about ends with para. </p>");
    }

    else if (req.url == '/hello') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    
    else { 
        res.end("<h1> the page wasn't found on the server. </h1> <p> not found. </p>")
    }
})

server.listen(port, () => {
    console.log(`server is being listened on port ${port} `);
});



