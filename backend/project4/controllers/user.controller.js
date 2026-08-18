import { userModel } from "../models/user.model.js"

const userRegistration = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "unable to register new user !", error })
    }
}

export { userRegistration }