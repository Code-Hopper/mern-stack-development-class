const home = (req, res) => {
    res.status(200).json({ message: "welcome to our test route" })
}

export { home }