import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    occupation: {
        type: String
    },
    message: {
        type: String,
        required: true
    },
    displayYou: {
        type: Boolean,
        required: true
    },
    timeStamp: {
        type: Date,
        default: new Date().getTime()
    }
})

const reviewModel = new mongoose.model("reviews", reviewSchema)

export { reviewModel }