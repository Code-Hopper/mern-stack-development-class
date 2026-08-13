import { reviewModel } from "../models/review.model.js"

export const reviewInfo = (req, res) => {
    res.status(200).json({
        data: " Welcome to review API section ",
        routes: {
            "1": {
                path: "/write",
                use: "to write review",
                method: "post"
            }
        }
    })
}

export const write = async (req, res) => {
    try {

        let { name, email, age, message, displayYou, occupation } = req.body

        let newReview = new reviewModel({ name, email, age, message, displayYou, occupation })

        let result = await newReview.save()

        console.log(result)

        res.status(202).json({ message: "review posted successfully !" })

    } catch (error) {
        res.status(500).json({ message: "failed to write a review !", error })
    }
}