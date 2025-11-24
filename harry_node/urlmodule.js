import url from 'node:url'; 
console.log("break")
console.log("break")
console.log("break")
const myURL = new URL('https://example.org:7600');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL)

console.log("      spce   space")
console.log(myURL.href)
console.log(myURL.port)


