
const homePage = (req, res)=> {
    res.send("this is our Home page of student"); 
}
 
const aboutPage = (req, res)=> {
    res.send("this is our About page of student"); 
}
 
const Servicepage = (req, res)=> {
    res.send("this is our Service page of student"); 
}
 
const CoursePage = (req, res)=> {
    res.send("this is our Course page of student"); 
}
 
const Feespage = (req, res)=> {
    res.send("this is our Fees page of student"); 
}
 
module.exports = {
    homePage, 
    aboutPage, 
    Servicepage, 
    CoursePage, 
    Feespage 
}