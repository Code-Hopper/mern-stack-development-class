import mongoose from "mongoose";

let addressObject = {
    street: "", city: "", state: "", country: "", pincode: ""
}

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
        type: Object,
        default: addressObject
    },
    timeStamp: {
        type: String,
        // default: Date.now()
        // UTC -> IST(UTC+5:30Hr)
    },
    marks: {
        type: Number
    }
})

userSchema.pre("save", function () {
    this.timeStamp = Date.now()
})

let UserModel = new mongoose.model("users", userSchema)

export { UserModel }

// db.collectionn.insertOne()
// UserModel.insertOne()/insertMany()
// UserModel.findOne()/find()
// UserModel.updateOne()/updateMany()
// UserModel.deleteOne()/deleteMany()

// NoSQL | Schema (Refference/Single Document)