import jwt from "jsonwebtoken"
import dotevn from "dotenv"

dotevn.config()

const generateToken = async (payLoad) => {
    try {

        const secret_key = process.env.MY_SECRET

        if (!secret_key) throw ("failed to obtain a secret key !")

        if (!payLoad) throw ("empty payLoad")

        let options = {
            expiresIn: "24h"
        }

        let token = await jwt.sign(payLoad, secret_key, options)

        return token

    } catch (err) {
        throw error("failed to create a token : ", err)
    }
}

export { generateToken }