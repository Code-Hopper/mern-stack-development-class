import express from "express"
import { reviewsRouter } from "./reviews.router.js"

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({
        message: "You Found Me Right !",
        endPoints: [
            "review"
        ],
        note: "each endpoint has it's own info route at endpoint/ !"
    })
})

router.use("/review", reviewsRouter) //http://localhost:port/review

export { router }