const EventEmitter = require('events'); 

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter(); 

myEmitter.on('WaterFull', () => { 
  console.log('please turn off the moter!');

  setTimeout(() => {
    console.log("please moter band kare afte 3 seconds...")
  }, 3000);

});
console.log("script is running")
console.log("script is still running") 

myEmitter.emit('WaterFull'); // this call runs the WaterFull event. like an event fire in js 



