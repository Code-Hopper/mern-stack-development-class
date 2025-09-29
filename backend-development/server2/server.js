import express from "express"
import { router } from "./routers/router.js"
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

let port = process.env.PORT

const app = express()

app.use(express.static("public"))

app.use(router)

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})