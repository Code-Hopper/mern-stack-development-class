import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
    },
    email: {
        type: String
    },
    address: {
        type: Object
    }
})

let UserModel = new mongoose.model("users", userSchema)

export { UserModel }

// db.collectionn.insertOne()
// UserModel.insertOne()/insertMany()
// UserModel.findOne()/find()
// UserModel.updateOne()/updateMany()
// UserModel.deleteOne()/deleteMany()