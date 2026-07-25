import express from "express"
import { welcome, message, learnMore, handelAbout, handelPostWelcome } from "../controllers/controller.js"

const router = express.Router()

router.get("/", welcome)

router.post("/", handelPostWelcome)

router.get("/about", handelAbout)

router.get("/message", message)

router.get("/learn-more", learnMore)

export { router }