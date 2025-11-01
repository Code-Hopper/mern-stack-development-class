import express from "express"
import { postHandleUserRegister } from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.get("/test", (req, res) => { res.status(200).json({ message: "you reached test route !" }) })

userRouter.post("/user-register", postHandleUserRegister)

export { userRouter }