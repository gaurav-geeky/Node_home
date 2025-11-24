import express from "express" 
import cors from "cors" 
import cookieParser from "cookie-parser";

const app = express(); 

app.use(cors({
    origin: process.env.CORS_ORIGIN, 
    credentials: true, 

}))  
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser()) 


export {app}

// got req.. and send after handling 
// but to process smt: are you capable to accept response . you not login  check in middle is called middleware. 



 