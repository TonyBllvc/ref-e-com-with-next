import connectDB from "../../../lib/db";
import jwt from 'jsonwebtoken'
import NextUserModel from "../../../models/User";
import { mongooseConnect } from "../../../lib/mongoose";

console.log('Coonecting..')
connectDB()
console.log('Coonected')


// to crease a web token 
const createToken = (_id, role) => {

    // create a reuseable function
    // ( taking in three arguments. 
    //  1. the payload which is the {_id})
    // 2. the secret for just the server (stored on the '.env' file)
    // 3. any property -- this case, the expires property
    return jwt.sign({ _id, role }, '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', { expiresIn: '1d' })
}

export default async function handle(req, res) {

    // await mongooseConnect()

    const { name, email, password } = req.body
    const { method } = req

    let emptyFields = []
    if (!name) {
        emptyFields.push('No surname allocated')
    }
    if (!email) {
        emptyFields.push('No email allocated')
    }
    if (emptyFields.length > 0) {
        return res.status(204).json({ error: 'Please fill in all the fields', emptyFields })
    }
    // if (method === 'POST') {
    //     try {
            
    //         // create a token
    //         const token = createToken(admin._id)

    //         res.status(200).json({ name, email, token })
    //     } catch (error) {
    //         res.status(400).json({ error: error.message })
    //     }
    // }
    if (method === 'POST') {
        try {
            // pick up admin and password(with hash) 
            const admin = await NextUserModel.signup(name, email, password)

            // create a token
            const token = createToken(admin._id)

            res.status(200).json({ name, email, token })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}