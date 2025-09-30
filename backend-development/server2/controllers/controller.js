let getHome = (req, res) => {
    // res.status(200).json({ message: "welcome user at our '/' route" })
    // res.status(200).sendFile("index.html")
    res.status(200).render("index", { data: "amey khondekar" })
}

const getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

const getContact = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("contact")
}

export { getHome, getAbout, getContact }