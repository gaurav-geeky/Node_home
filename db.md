
1. first of all make account on mongoDB 
username,  password, all set 

2. go to env variable . 
add variable need to use ___  port,  mongodb URI,   ___

# PORT = 8000  
# mongodb URI = mongo db ka connection String 

NOW database setup  and  environment variables also 


3. 
src >>  constant.js _ db name = 
export const DB_NAME = "videotube" 


app.js folder through express 

db connection  through mongoose. 


4.   database dusre continent me rakha hai 
jab bhi db se baat karo   ___  async , await   lagana hai  ___

professionally  use   ()()  IIFE  to immediately call function 
use    ;    for cleaning purpose if by mistake   previously not close something. 