import express from "express"
import { getHome } from "../controllers/controller.js"
const router = express.Router()

router.get("/", getHome)

export { router }