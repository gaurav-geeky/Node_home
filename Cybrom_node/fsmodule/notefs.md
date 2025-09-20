__read file__        require server     read one 


needs only     1 argument  (err)=> { }
__write file__       does not need server.  
make one : if file is not then make one 
if it exist then it  replaces the file with data. 
file replace ,  data replaces


__append file__   
data appends here. 

fs.appendFile('appi.pdf', " hello this is our append file method of fs module, here it appends data. see here. ", (err)=> {
    if (err) throw err;
    console.log("append created ....."); 
})

__rename file__ 
can change file  ,   its extension

fs.rename('appi.pdf', "sopu.txt", (err)=> {
    if (err) throw err; 
    console.log("file renamed..."); 
})

__delete file .__   unlink method 
fs.unlink("sopu.txt", (err)=> {
    if (err) throw err; 
    console.log("file DELETED..."); 
})

#  file exist  or  fs.existSync 

const fs = require('fs');

if (fs.existsSync('ok.txt')) {
    console.log("file hai ...")
}
else {
    console.log("nahi file ni h")
}


# create new directory.  folder

fs.mkdir("Bhopali", (err)=> {
    if (err) throw err; 
    console.log("new diretory created...."); 
})

# read director. 

fs.readdir(".", (err, files)=> {
    if (err) throw err; 
    console.log("files in directory : ", files); 
})













