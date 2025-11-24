
// function simple() {
//     console.log("Simple thing is the most complex.."); 
// }

// module.exports = simple; 
// use only in case of   .js  file 


//  now   .mjs  extension.  ECMA Script module...

export function simple() {
    console.log("Simple thing is the most complex.. with mjs ext"); 
    return 101;
}

export default function difficult() {
    console.log("difficult things are easy when comes in reg practice."); 
}


