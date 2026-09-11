import express from "express"
import { welcome, message, learnMore, handelAbout, handelPostWelcome, handleDelete,handleUpdate } from "../controllers/controller.js"

const router = express.Router()

router.get("/", welcome)

router.post("/", handelPostWelcome)

router.delete("/delete/:id",handleDelete)

router.put("/update/:id",handleUpdate)

router.get("/about", handelAbout)

router.get("/message", message)

router.get("/learn-more", learnMore)

export { router }