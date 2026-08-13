import express from "express"
import { reviewInfo, write } from "../controllers/review.controller.js"

const reviewsRouter = express.Router()

reviewsRouter.get("/", reviewInfo)
reviewsRouter.post("/write", write)

export { reviewsRouter }