// import mongoose from "mongoose"
// import clientPromise from "../../lib/mongodb"
import connectDB from "../../lib/db";
// import { mongooseConnect } from "../../lib/mongoose"
import { Product } from "../../models/Product"
import NextUserModel from "../../models/User";
import jwt from 'jsonwebtoken'
// import { authorize } from "./user/authorization"

export default async function handle(req, res) {
    await connectDB()

    const tokenJWT = req.cookies['jwt'];

    if (!tokenJWT) {
        return res.status(401).json({ message: "Unauthorized Request" });
    }
    
    // For middleware protexted route
    try {
        const decoded = jwt.verify(tokenJWT, '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')
        if (decoded) {
        }
        console.log('setp 1')
        req.user = await NextUserModel.findById(decoded._id).select('-password')
        // req.user = decoded._id
        console.log('setp 2')
    } catch (error) {
        res.status(401).json({ error: error.name, status: error.statusCode, stack: error.stack})
        console.log('setp e')
        return
    }

    const { title, description, price } = req.body
    const { method } = req

    // routes for products
    
    if (method === 'GET') {
        const product = await Product.find()

        res.status(201).json(product)
        // if (req.query?.id) {
        //     res.json(await Product.findOne({ _id: req.query.id }));
        // } else {
        //     res.json(await Product.find());
        // }
    }

    if (method === 'POST') {
        const createProduct = await Product.create({
            title, description, price
        })

        res.status(201).json(createProduct)
    }
}