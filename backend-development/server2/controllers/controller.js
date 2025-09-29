let getHome = (req, res) => {
    res.status(200).json({ message: "welcome user at our '/' route" })
}

export { getHome }