

// it is a middleware which is a function 
app.use((req, res, next)=> {
    console.log("I am app level middlewarre"); 
    next(); 
})

app.get("/home", (req, res) => {
    console.log("home page node"); 
    res.send("home page node from react"); 
})

