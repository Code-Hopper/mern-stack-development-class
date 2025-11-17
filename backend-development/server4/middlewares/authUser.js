import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { userModel } from "../models/userSchema.js"

dotenv.config({ path: "./config.env" })

const authUser = async (req, res, next) => {
    try {

        let { token } = req.headers

        if (!token) throw ("invalid token data !")

        // console.log(token)

        // decode

        let decode = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decode)

        let user = await userModel.findOne({ "email.userEmail": decode.email })

        if (!user) throw ("invalid token !")

        req.user = user

        next()
    } catch (err) {
        console.log("error while auth user :", err)
        res.status(400).json({ messsage: "can't allow user access ", err })
    }
}

export { authUser }