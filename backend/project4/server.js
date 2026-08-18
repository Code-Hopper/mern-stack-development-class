import express from "express"
import dotenv from "dotenv"
import "./database/connection.js"
import { router } from "./routers/index.js"

dotenv.config()

const app = express()

let port = process.env.PORT

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
	res.status(200).json({
		message: "welcome to user DB Project !",
		note: "use /api to accessing any routes"
	})
})

app.use("/api", router) //http://localhost:port/api/-----

app.use((req, res) => {
	res.status(404).json({ message: "route not found !" })
})

app.listen(port, () => {
	console.log(`server is running on port ${port}`)
})
