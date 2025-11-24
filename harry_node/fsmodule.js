const fs = require('fs'); 

// fs.readFile('file.txt', 'utf8', (err, data)=> {
//     console.log(err, data); 
// } )

const a = fs.readFileSync('file.txt') 
console.log(a.toString());  
  
  
// fs.writeFile('file2.txt', "this is our data", ()=> {  
//     console.log("written to the file using write file."); 
// }); 

b = fs.writeFileSync('file2.txt', "this is our next data2") 
console.log(b)

console.log("finished reading file.") 
