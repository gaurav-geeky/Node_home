const home = (req, res) => {
    res.render("home");
}

const about = (req, res) => {
    res.render("about");
}

const service = (req, res) => {
    res.render("service");
}

const contact = (req, res) => {
    res.render("contact");
}

module.exports = {
    home,
    about,
    service,
    contact,
}