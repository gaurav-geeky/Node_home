
const homePage = (req, res)=> {
    res.send("<h1> this is our employees home page </h1>"); 
}

const aboutPage = (req, res)=> {
    res.send(" <h1> here you can find all about our employees </h1>"); 
}

const designationPage = (req, res)=> {
    res.send("<h2>each employee has some designation form lower to higher posts </h2>"); 
}

const departmentPage = (req, res)=> {
    res.send("<h1>employees department page, total 10 departments of office. </h1>"); 
}

const Salarypage = (req, res)=> {
    res.send(" <h1>Salary page of employees ranging from lower to higher classes. </h1>"); 
} 

module.exports = {
    homePage, 
    aboutPage, 
    designationPage, 
    departmentPage, 
    Salarypage, 
}

 