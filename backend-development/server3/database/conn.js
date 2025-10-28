import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

async function conn() {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
        console.log("successfully contected with mongodb database !")
    } catch (err) {
        console.log("unable to connect with mongodb database : ")
        console.log(err)
    }
}

conn()

// SCHEMA