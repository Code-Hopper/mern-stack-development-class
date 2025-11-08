import express from "express"
import { postHandleUserRegister, handleEmailOtp, handleLogin, getUserInfo } from "../controllers/userController.js"
import { authUser } from "../middlewares/authUser.js"

const userRouter = express.Router()

userRouter.get("/test", (req, res) => { res.status(200).json({ message: "you reached test route !" }) })

userRouter.post("/user-register", postHandleUserRegister)

userRouter.post("/verify-email-otp", handleEmailOtp)

userRouter.post("/reset-password-request", handleEmailOtp)

userRouter.post("/verify-password-reset-otp", handleEmailOtp)

userRouter.post("/login", handleLogin)

// protected route

userRouter.get("/get-user-info/", authUser, getUserInfo)

export { userRouter }

// middleware