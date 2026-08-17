import { reviewModel } from "../models/review.model.js"

export const reviewInfo = (req, res) => {
    res.status(200).json({
        data: " Welcome to review API section ",
        routes: {
            "1": {
                path: "/write",
                use: "to write review",
                method: "post"
            },
            "2": {
                path: "/fetch-all",
                use: "to read all reviews",
                method: "get"
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

export const fetchReview = async (req, res) => {
    try {

        let reviews = await reviewModel.find({}, { __v: false })

        if (reviews.length == 0) {
            throw ({ error: "no reviews to fetch !" })
        }

        res.status(200).json({ message: "fetched reviews", reviews })

    } catch (error) {
        res.status(500).json({ message: "failed to fetch a review !", error })
    }
}

export const updateReview = async (req, res) => {
    try {

        let { reviewId } = req.params

        let { name, email, message, displayYou, age } = req.body

        let updateQuery = {}

        if (name !== undefined) updateQuery.name = name
        if (email !== undefined) updateQuery.email = email
        if (message !== undefined) updateQuery.message = message
        if (displayYou !== undefined) updateQuery.displayYou = displayYou
        if (age !== undefined) updateQuery.age = age

        let result = await reviewModel.updateOne({ "_id": reviewId }, { $set: updateQuery })

        res.status(202).json({ message: "successfully updated the review !" })

    } catch (error) {
        res.status(500).json({ message: "failed to update a review !", error })
    }
}