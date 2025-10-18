# in ejs   we can do  DYNAMIC  stuffs.. 

<h3>hey <%= 3+3 %>  </h3>  



# static files   vdo 7

//  app.use(express.static(path.join(__dirname, "public")));   

__. with the help of this we can find static file  .__
image, audio, video ,  vanila js , css files all static

by using this we no need to give  /public   path while using js, css  etc.  


# EJS  EJS  EJS   EJS  EJS 

const data = ["golu", "ranu", "sanu", "kanu", "pinnu"]; 

app.get("/home", (req, res)=> { 
        res.render("home", {naam: "cybrom" , data: data}); 
})

<h1> hello <%= naam %>
            </h1>

            <ul>
                <% 

                for (let i=0; i<data.length; i++)

                { %>
                    <li> <%= data[i] %> </li>
                <% }

                %>
            </ul>

# to get dynamic values while making express routes... 

















