import { userModel } from "../models/userSchema.js"
import { redisClient } from "../utils/redisConfig.js";
import nodemailer from "nodemailer"
import bcrpyt from "bcrypt"
import jwt from "jsonwebtoken"

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
    }
});

let genrateOTP = () => {
    return Math.floor((Math.random() * 9000) + 1000)
}

let sendEmail = async (email) => {
    try {

        let otp = genrateOTP()

        let result = await transporter.sendMail({
            from: process.env.USER_EMAIL,
            to: email,
            subject: "test otp email !",
            html: `
                <h1>your otp is <span style="color:red;">${otp}</span> </h1>
                <p>this otp is valid for 5 mins.</p>
            `
        })

        console.log(result)

        console.log("an email has been sent !")

        // store user otp in redis for verification

        redisClient.set(`user.${email}`, otp, 300)

        return result

    } catch (err) {
        console.log("unable to send email: ", err)
        throw err
    }
}

let postHandleUserRegister = async (req, res) => {
    try {

        let { name, phone, email, address, password } = req.body

        if (!name || !phone || !email || !address || !password) throw ("invalid/incomplete data !")

        let userExist = await userModel.findOne({ $or: [{ "email.userEmail": email }, { "phone": phone }] })

        if (userExist) throw ("duplicate email/phone please try again with different phone/email !")

        let emailObject = {
            userEmail: email, verified: false
        }

        await sendEmail(email)

        let newUser = new userModel({ name, phone, email: emailObject, address, password })

        await newUser.save()

        console.log("user registred successfully !")

        res.status(202).json({ message: "user registered successfully !" })

    } catch (err) {
        console.log("unable to register the user : ", err)
        res.status(400).json({ message: "unble to register user !", err })
    }
}

const handleEmailOtp = async (req, res) => {
    try {
        let { email, otp } = req.body

        if (!email || !otp) throw ("invalid data !")

        let user = await userModel.findOne({ "email.userEmail": email })

        if (!user) throw ("invalid email please register first !")

        let storedUserOtp = await redisClient.get(`user.${user.email.userEmail}`)

        if (!storedUserOtp) throw ("invalid or expried OTP !")

        if (storedUserOtp != otp) throw ("otp din't matched !")

        let updateResult = await userModel.updateOne({ "email.userEmail": email }, { "email.verified": true })

        if (updateResult.modifiedCount == 0) throw ("din't update any user !")

        res.status(202).json({ message: "otp verified successfully !" })
    }
    catch (err) {
        console.log("unable to verify otp: ", err)
        res.status(400).json({ message: "error in OTP verification", err })
    }
}

// password reset

const handlePasswordReset = () => {

}

const handlePasswordResetOtp = () => {

}

// login

const handleLogin = async (req, res) => {
    try {

        let { email, password } = req.body

        if (!email || !password) throw ("invalid login data !")

        let user = await userModel.findOne({ "email.userEmail": email })

        if (!user) throw ("unable to find user please register first  !")

        // compare passwords
        // passwrod  with user.password(hashed)

        let comparePassword = await bcrpyt.compare(password, user.password)

        if (!comparePassword) throw ("invalid email/password !")

        // genrate token from JWT

        let tokenPayload = {
            email: user.email.userEmail,
            name: user.name
        }

        let options = {
            expiresIn: '12h'
        }

        let token = await jwt.sign(tokenPayload, process.env.JWT_SECRET, options)

        res.status(202).json({ message: "login was successfull !", token })

    } catch (err) {
        console.log("unable to login :", err)
        res.status(400).json({ message: "login failed !", err })
    }
}

const getUserInfo = async (req, res) => {
    try {

        let user = req.user

        if (!user) throw ("no user was setup !")

        res.status(200).json({ message: "got user data !", user })

    } catch (err) {
        res.status(400).json({message : "cannot send user data at this time !",err})
    }
}

export { handleLogin, postHandleUserRegister, handleEmailOtp, handlePasswordReset, handlePasswordResetOtp, getUserInfo }