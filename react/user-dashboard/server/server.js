import express from "express"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config({})

const app = express()

let port = process.env.PORT || 3021

app.use(express.json())

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMPT_SECURE,
    auth: {
        user: process.env.EMAIL_ACCOUNT,
        pass: process.env.EMAIL_PASSWORD
    }
})

app.post("/send-email", async (req, res) => {
    try {
        let { email } = req.body

        const emailAction = await transporter.sendMail({
            from: "Testing Nodemailer",
            to: email,
            subject: "testing",
            text: "somthing something"
        })

        res.status(202).json({ message: "email sent successfully !" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "somthing went wrong !", err })
    }
})

app.listen(port, () => {
    console.log('server is running on port : ', port)
})