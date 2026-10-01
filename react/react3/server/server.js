import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

let port = process.env.PORT

const app = express()

let corsOption = {
    method: "*",
    origin: "*"
}

app.use(express.json())

app.use(cors(corsOption))

app.get("/data", (req, res) => {
    res.status(200).json({ message: "this is some data from backend !" })
})

app.post("/data", (req, res) => {
    console.log(req.body)
    res.status(202).json({ message: "we got the data" })
})

app.listen(port, () => {
    console.log(`server is running on port : ${port} !`)
})