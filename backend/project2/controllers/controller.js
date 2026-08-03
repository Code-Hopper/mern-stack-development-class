let data = []

const welcome = (req, res) => {
    // res.status(200).json({ message: "welcome to root route!" })
    res.status(200).render("index", { inputData: data })
}

const handelPostWelcome = (req, res) => {
    console.log(req.body)
    data.push(req.body)
    // res.status(200).render("index")
    res.status(300).redirect("/api/")
}

const handleDelete = (req, res) => {
    let { id } = req.params

    console.log(id)

    data = data.filter((items, index) => {
        return id != index
    })

    console.log(data)

    res.status(300).render("index", { inputData: data })

}

const handleUpdate = (req, res) => {

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

export { welcome, message, learnMore, handelAbout, handelPostWelcome, handleDelete, handleUpdate }

// SQL (MySQL, Postgres)
// name   phone   address
// om     123     nagpur
// kunal  123     nagpur

// NoSQL (MongoDB)
// {
//     name : om,
//     phone : 123,
//     address : nagpur
// }