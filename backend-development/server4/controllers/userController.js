import { userModel } from "../models/userSchema.js"

import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_EMAIL_PASSWORD,
    },
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
            `
        })
        console.log(result)

        console.log("an email has been sent !")

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

export { postHandleUserRegister }

// send an otp to the email.userEmail (nodemailer)

// verify that otp using a seprate route

// if varified then update email.verified to be true