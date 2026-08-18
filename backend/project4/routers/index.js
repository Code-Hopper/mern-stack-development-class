import express from "express"
import { userRouter } from "./userRouter.router.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "You Found Me Right !",
        endPoints: [
            "user"
        ],
        note: "each endpoint has it's own info route at endpoint/ !"
    })
})

router.use("/user", userRouter) //http://localhost:port/review

export { router }