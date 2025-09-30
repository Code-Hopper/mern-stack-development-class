import express from "express"
import { getHome, getAbout, getContact } from "../controllers/controller.js"
const router = express.Router()

router.get("/", getHome)
router.get("/about", getAbout)
router.get("/contact", getContact)

export { router }