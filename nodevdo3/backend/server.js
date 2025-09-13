// const express = require('express')

import express from 'express';      // module js
const app = express();

app.use(express.static('dist'))

// app.get('/', (req, res) => {
//     res.send('Server is ready backend.');
// });

// special routes where all values serves. to low   /  work.
// get list of 5 jokes 

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "first joke",
            content: "cats cant bark"
        },
        {
            id: 2,
            title: "second joke",
            content: "Dog can not meow"
        },
        {
            id: 3,
            title: "third joke",
            content: "this is a joke"
        },
        {
            id: 4,
            title: "forth joke",
            content: "I am joking."
        },
        {
            id: 5,
            title: "fifth joke",
            content: "joke is woke."
        },

    ]; 
    res.send(jokes); 
})

const port = process.env.PORT || 3300;

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`);
}
);

// now backend work is ready.. 

/*

❤️
BAD PRACTICE :   Middleware    beech me kisi ko rokna 
npm run bhild          dist folder push it in  backend 
use middle ware in server js       serve static asset. 
app.use     for middleware  (express)



❤️
app.use(express.static('dist'))  ❤️❤️  above  now local host act as react app

// app.get('/', (req, res) => {
//     res.send('Server is ready backend.');
// });


here problem is when   something changes in frontend   nothing will show in backend because  dist serves static assets of  FRONT in  BACK end
 
*/