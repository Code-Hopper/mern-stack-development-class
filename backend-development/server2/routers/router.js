import express from "express"
import { getHome, getAbout, getContact, postFormData, postSomeInformation } from "../controllers/controller.js"
const router = express.Router()

router.get("/", getHome)
router.get("/about", getAbout)
router.get("/contact", getContact)

router.post("/form-data", postFormData)

router.post("/some-information/:yourName", postSomeInformation)

export { router }

// form(body), url data(query and path parameters), json