import { userModel } from "../models/user.model.js"

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

        if(!passwordRegex.test(password)){
            return res.status(400).json({message: "invalid password ! please have minium length 8 chars and atleast one uper case, one lower case, one special char and one digit !"})
        }

        let newUser = new userModel({ name, phone, email, address, dob, password, gender, profileImage })

        let result = await newUser.save()

        res.status(202).json({ message: "user registered successfully !", userEmail: result.email })

    } catch (error) {
        res.status(500).json({ message: "unable to register new user !", error })
    }
}

export { userRegistration }

// phone or email