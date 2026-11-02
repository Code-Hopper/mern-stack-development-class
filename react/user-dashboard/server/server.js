import express from "express"
import dotenv from "dotenv"
import nodemailer from "nodemailer"
import { createClient } from "redis"

dotenv.config({})

const app = express()

let port = process.env.PORT || 3021

const redis = createClient({
    url: process.env.REDIS_URL
})

redis.on("error", (err) => {
    console.log("an error occured while connecting redis : ", err)
})

await redis.connect()

console.log('redis connected !')

const genrateOtp = () => {
    return parseInt(Math.random() * 9999)
}

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

        const otp = genrateOtp()

        await redis.set(
            `otp:${email}`,
            otp,
            {
                EX: 300
            }
        )

        const emailAction = await transporter.sendMail({
            from: "Testing Nodemailer",
            to: email,
            subject: "testing OTP",
            text: `your otp is ${otp} will exprise in 5 mins`
        })

        res.status(202).json({ message: "email sent successfully !" })

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "somthing went wrong !", err })
    }
})

app.post("/validate-otp", async (req, res) => {
    try {
        let { email, otp } = req.body

        const getSavedOtp = await redis.get(`otp:${email}`)

        if(!getSavedOtp) {
            return res.status(400).json({message: "otp is expried or not found !"})
        }

        if(getSavedOtp != otp){
            return res.status(400).json({message: "invalid otp"})
        }

        await redis.del(`otp:${email}`)

        return res.status(200).json({message: "varified successfully !"})

    } catch (err) {
        res.status(500).json({message: "somthing went wrong !", err})
    }   
})


app.listen(port, () => {
    console.log('server is running on port : ', port)
})