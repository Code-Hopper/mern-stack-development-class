import { userModel } from "../models/user.model.js"
import bcrypt from "bcrypt"
import { generateToken } from "../lib/generateToken.js"
import { json } from "express"

const userRegistration = async (req, res) => {
    try {

        let { name, phone, email, address, dob, password, gender, profileImage } = req.body

        if (!name || !phone || !email || !address || !dob || !password || !gender) {
            return res.status(400).json({ message: "invalid/incomplete data !" })
        }

        if (!address.street1 || !address.city || !address.state || !address.pincode || !address.country) {
            return res.status(400).json({ message: "incomplete address please send street, city, state, pincode, contry !" })
        }

        let searchExistingUser = await userModel.findOne({ $or: [{ "phone": phone }, { "email": email }] })

        if (searchExistingUser) {
            return res.status(400).json({ message: "phone/email exits !" })
        }

        const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            return res.status(400).json({ message: "invalid password ! please have minium length 8 chars and atleast one uper case, one lower case, one special char and one digit !" })
        }

        let newUser = new userModel({ name, phone, email, address, dob, password, gender, profileImage })

        let result = await newUser.save()

        res.status(202).json({ message: "user registered successfully !", userEmail: result.email })

    } catch (error) {
        res.status(500).json({ message: "unable to register new user !", error })
    }
}

const userLogin = async (req, res) => {
    try {

        let { email, password } = req.body

        if (!email || !password) return res.status(400).json({ message: "missing email/password !" })

        let checkUserExists = await userModel.findOne({ "email": email })

        if (!checkUserExists) return res.status(404).json({ message: "email does not exits, please register first !" })

        let matchPassword = await bcrypt.compare(password, checkUserExists.password)

        if (!matchPassword) return res.status(401).json({ message: "invalid email/password !" })

        let generatedToken = await generateToken({ email: checkUserExists.email, id: checkUserExists._id })

        res.status(202).json({ message: "login successfull !", user: checkUserExists, token: generatedToken })

    } catch (error) {
        res.status(500).json({ message: "login failed : ", error })
    }
}

const userInfo = async (req, res) => {
    try {
        let user = req.user

        if (!user) throw ("failed to get user !")

        res.status(200).json({ message: "got user profile !", user })

    } catch (error) {
        res.status(500).json({ message: "unable to get user info !", error })
    }
}

export { userRegistration, userLogin, userInfo }