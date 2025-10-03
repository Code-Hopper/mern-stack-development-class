let users = []

let getHome = (req, res) => {
    // res.status(200).json({ message: "welcome user at our '/' route" })
    // res.status(200).sendFile("index.html")
    res.status(200).render("index", { data: users })
}

const getAbout = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("about")
}

const getContact = (req, res) => {
    // res.status(200).sendFile("about.html")
    res.status(200).render("contact")
}

const postFormData = (req, res) => {
    console.log(req.body)
    users.push(req.body)
    res.status(301).redirect("/")
}

export { getHome, getAbout, getContact, postFormData }

// form, routes(query parameters, path parameter), json()