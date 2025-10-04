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

const postSomeInformation = (req, res) => {
    console.log(req)
    let {data} = req.headers
    // req.body
    // req.query
    // req.params
    // req.headers
    console.log(data)

    let {yourName} = req.params

    res.status(202).json({ message: 'reached some-information route !' })
}

export { getHome, getAbout, getContact, postFormData, postSomeInformation }

// form, routes(query parameters, path parameter), json()

// api client | react ui | postman | thunder client