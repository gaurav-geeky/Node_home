const express = require('express');
const router = express.Router();

router.post("/submit", (req, res) => {
    const { username, email } = req.body;

    if (!username || !email) {
        return res.status(400).send("all fields are necessary.");
    }

    res.send(`
        form mil gaya hai <br> 
        Name: ${username} <br> 
        Email: ${email} 
        `);
});

module.exports = router;


















// const express = require("express");
// const router = express.Router();

// // Handle POST request
// router.post("/submit", (req, res) => {
//     const { username, email } = req.body;

//     if (!username || !email) {
//         return res.status(400).send("❌ All fields are required!");
//     }

//     res.send(`
//     ✅ Form received! <br>
//     Name: ${username} <br>
//     Email: ${email}
//   `);
// });

// module.exports = router;

