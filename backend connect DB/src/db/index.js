
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async ()=> {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
        console.log(`\n MongoDB conected !! DB Host : ${connectionInstance.connection.host}`)
    } 
    catch (error) {
        console.log("mongodb connection error : ", error); 
        process.exit(1) 
    } 
} 

export default connectDB




/* 

1. node js gives us feature of process : process is current app run on process it is its' reference. 

2. mongoose.connect(link + DB_name);  

3.  await jab krte  mongoose gives us return object. 

4. No app here,  purely db connect. 
*/