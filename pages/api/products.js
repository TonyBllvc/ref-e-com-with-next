// import mongoose from "mongoose"
// import clientPromise from "../../lib/mongodb"
import { mongooseConnect } from "../../lib/mongoose"
import { Product } from "../../models/Product"

export default async function handle(req, res) {
    await mongooseConnect()

    const { title, description, price } = req.body
    const { method } = req

    // mongoose.connect(clientPromise.url) 
    if (method === 'POST') {
        const createProduct = await Product.create({
            title, description, price
        })

        res.status(201).json(createProduct)
    }
}