import express from "express"
import { fetchReview, reviewInfo, updateReview, write } from "../controllers/review.controller.js"

const reviewsRouter = express.Router()

reviewsRouter.get("/", reviewInfo)

reviewsRouter.post("/write", write)

reviewsRouter.get("/fetch-all", fetchReview)

reviewsRouter.put("/update/:reviewId", updateReview)

export { reviewsRouter }