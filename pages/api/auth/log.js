import connectDB from "../../../lib/db";
import jwt from 'jsonwebtoken'
// import { mongooseConnect } from "../../../lib/mongoose";
import NextUserModel from "../../../models/User";
import { serialize } from "cookie";
// import { parse } from "cookie";

connectDB()
console.log('Coonected')

// to crease a web token 
const createToken = (res, _id) => {

    // create a reuseable function
    // ( taking in three arguments. 
    //  1. the payload which is the {_id})
    // 2. the secret for just the server (stored on the '.env' file)
    // 3. any property -- this case, the expires property
    const tokenCookie = jwt.sign({ _id }, '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', { expiresIn: '1d' })

    const serialised = serialize("jwt", tokenCookie, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 2 * 24 * 60 * 60 * 1000, // 2 days
        path: "/",
    });

    res.setHeader("Set-Cookie", serialised);

    return serialised
}

export default async function handle(req, res) {
    // await mongooseConnect()

    const { email, password } = req.body
    const { method } = req

    let emptyFields = []

    if (!email) {
        emptyFields.push('No email allocated')
    }
    if (emptyFields.length > 0) {
        return res.status(204).json({ error: 'Please fill in all the fields', emptyFields })
    }

    if (method === 'POST') {

        try {
            // pick up admin and password(with hash) 
            const admin = await NextUserModel.login(email, password)

            // create a token
            createToken(res, admin._id)

            res.status(200).json({ _id: admin._id, email, name: admin.name })
        } catch (error) {
            res.status(400).json({ error: error.message })
        }
    }
}