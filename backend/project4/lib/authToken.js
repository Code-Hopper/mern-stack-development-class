import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { userModel } from "../models/user.model.js"

dotenv.config()

export const authUser = async (req, res, next) => {
    try {

        // req.query | req.params | req.headers

        let userToken = req.headers.authorization

        if (!userToken) res.status(403).json({ message: "invalid or missing token !" })

        let checkToken = await jwt.verify(userToken, process.env.MY_SECRET)

        let findUser = await userModel.findById(checkToken.id)

        if (!findUser) res.status(404).json({ message: "invalid token !" })

        req.user = findUser

        next()

    } catch (error) {
        res.status(500).json({ message: "failed to validate the token !", error })
    }
}