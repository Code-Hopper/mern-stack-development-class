import express from "express"
import dotenv from "dotenv"
import ejs from "ejs"

import { router } from "./routers/router.js"

dotenv.config()

const app = express()

let port = process.env.PORT

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static("public"))
// to serve static content (media/css)

app.set("view engine", "ejs")

app.use("/api", router)

// wildcard route (for 404)
app.use((req, res) => {
    res.status(404).json({ message: "Content Not Found 404 !" })
})

app.listen(port, () => {
    console.log(`server is running on port : ${port} !`)
})