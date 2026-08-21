import express from "express"

import { userRegistration, userLogin } from "../controllers/user.controller.js"

const userRouter = express.Router()

userRouter.get("/", (req, res) => {
    res.status(200).json({
        message: "welcome to user's routes",
        routes: [
            {
                route: "/login",
                method: "post",
                note: "login route that return token !"
            },
            {
                route: "/register",
                method: "post",
                note: "for registering new users !"
            }
        ]
    })
})

userRouter.post("/register", userRegistration)

userRouter.post("/login", userLogin)

export { userRouter }