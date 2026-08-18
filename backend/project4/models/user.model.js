import mongoose from "mongoose";

const userAddressSchema = new mongoose.Schema({
    street1: {
        type: String,
        required: true
    },
    street2: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true,
        default: "India"
    }
}, { _id: false })

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: userAddressSchema,
        require: true
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE', 'OTHER']
    },
    profileImage: {
        type: String
    }
}, { timestamps: true })

const userModel = new mongoose.model("users", userSchema)

export { userModel }