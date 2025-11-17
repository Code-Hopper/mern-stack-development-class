// import and export statements
// require(Before ES6) & import/export(After ES6)

// scope instance = require("dependency")

// const express = require("express")

import express from "express"

// import default

import something from "./data.js"

// import named

import { data2, doSomething2, doSomething3, someMethod } from "./data.js"

const app = express()

let port = 5010

app.get("/", (req, res) => {
    res.status(200).json({ message: "welcome to our home route" })
})

console.log("server value for import is : ", something)

something()

console.log(data2)

doSomething2()

doSomething3()

someMethod()

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})

// http://localhost:5010
// welcome to our home route

// query, path params, form data, raw JSON

// whenever user send data using either of above formats we will be able to read that data from req(request object) within the http method/s

// send, sendFile, render(view engine), json

// Model(Schema, Routers, Utils) View(UI,View Engine,React) Controllers

// API

// HTTP methods (GET(to give data) POST(to recieve) PUT(to update) PATCH(to update[only one field]) DELETE(to delete))

// HTTP status code [100 - 199(informational), 200 - 299(success), 300 - 399(redirection), 400 - 499(user error), 500 - 599(server error)]

// send
// sendFile
// json
// render