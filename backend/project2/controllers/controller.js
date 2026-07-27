let data = []

const welcome = (req, res) => {
    // res.status(200).json({ message: "welcome to root route!" })
    res.status(200).render("index", { name: "amey", age: 3, inputData: data })
}

const handelPostWelcome = (req, res) => {
    console.log(req.body)
    data.push(req.body)
    // res.status(200).render("index")
    res.status(300).redirect("/api/")
}

const message = (req, res) => {
    res.status(200).json({ message: "welcome to message route!" })
}

const learnMore = (req, res) => {
    res.status(200).json({ message: "welcome to learn more route!" })
}

const handelAbout = (req, res) => {
    res.status(200).render("about")
}

export { welcome, message, learnMore, handelAbout, handelPostWelcome }