import express from "express"
import { introToAPI, getAllLanguages, getRandomLanguage, getFilteredData } from "../controllers/controller.js"

const router = express.Router()

router.get("/", (req, res) => { res.status(301).redirect("/api/techs/learn-api/") })

router.get("/learn-api", introToAPI)

router.get("/all-languages", getAllLanguages)

router.get("/get-random-language", getRandomLanguage)

router.get("/filter", getFilteredData)

export { router }