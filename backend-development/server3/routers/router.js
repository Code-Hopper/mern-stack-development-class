import express from "express"
import { home, PostRegisterUser, getAllUsers } from "../controllers/controller.js"

const router = express.Router()

router.get("/test", home)

router.post("/register-user", PostRegisterUser)

router.get("/get-all-user", getAllUsers)

export default router