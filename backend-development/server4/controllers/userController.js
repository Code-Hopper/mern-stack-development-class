import { userModel } from "../models/userSchema.js"

let postHandleUserRegister = async (req, res) => {
    try {

        let { name, phone, email, address, password } = req.body

        if (!name || !phone || !email || !address || !password) throw ("invalid/incomplete data !")

        let userExist = await userModel.findOne({ $or: [{ "email.userEmail": email }, { "phone": phone }] })

        if (userExist) throw ("duplicate email/phone please try again with different phone/email !")

        let emailObject = {
            userEmail: email, verified: false
        }

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