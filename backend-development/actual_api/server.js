import express from "express"
import dotenv from "dotenv"
import { router } from "./routers/router.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.get("/",(req,res)=>{res.status(301).redirect("/api/techs/learn-api")})

app.use("/api/techs", router)

app.use((req, res) => {
    res.status(404).json({ message: "content not found !" })
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})