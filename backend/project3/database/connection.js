import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("Connected With Database !")
    } catch (error) {
        console.log("Unable to connect with database : ", error)
    }
}

connectDB()