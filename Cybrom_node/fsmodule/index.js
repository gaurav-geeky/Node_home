const fs = require('fs');

fs.appendFile('appi.pdf', " hello this is our append file method of fs module, here it appends data. see here. ", (err)=> {
    if (err) throw err;
    console.log("append created ....."); 
})

// append file ,  write file    both  takes only  err    NOT DATA
