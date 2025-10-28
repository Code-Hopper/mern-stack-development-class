import express from "express"
import dotenv from "dotenv"
import router from "./routers/router.js"
import "./database/conn.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT || 5012

app.use(express.static("public"))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use("/api", router)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})