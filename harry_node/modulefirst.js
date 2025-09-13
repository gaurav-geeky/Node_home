// const simple2 = require("./modulesecond.mjs"); 
// simple2()

//  such import is called common js modules.

// "type": "commonjs",     .js ext



import {simple as easy } from "./modulesecond.mjs" // named expo

import diff123 from "./modulesecond.mjs" // exp default use any name

easy()
diff123()

  // "type": "module",    .mjs ext.

// import * as all from "./modulesecond.mjs" 
// console.log(all.simple()) 