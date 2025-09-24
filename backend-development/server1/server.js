// import and export statements
// require(Before ES6) & import/export(After ES6)

// scope instance = require("dependency")

// const express = require("express")

import express from "express"

const app = express()

let port = 5010

app.get("/", (req, res) => {
    res.send("welcome to our home route")
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})

// http://localhost:5010
// welcome to our home route