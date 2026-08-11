import express from "express"
import dotenv from "dotenv"
import "./database/connection.js"

dotenv.config()

const app = express()

let port = process.env.PORT

app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})
