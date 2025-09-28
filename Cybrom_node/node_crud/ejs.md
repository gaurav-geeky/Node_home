# res.render("home", { message: "Yes, data received!" });


You are not magically sharing variables between files.

What’s happening is:

Express uses the EJS templating engine.

The second argument { message: "Yes, data received!" } is just a JavaScript object.

Express gives that object to EJS.

Inside home.ejs, all the keys of the object (message) become available as variables.






