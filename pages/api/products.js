import mongoose from "mongoose"
import clientPromise from "../../lib/mongodb"
import { Product } from "../../models/Product"

export default async function handle(req, res) {
    const { title, description, price } = req.body
    const { method } = req
    // mongoose.connect(clientPromise.url) 
    mongoose.Promise = clientPromise
    if (method === 'POST') {
        const createProduct = await Product.create({
            title, description, price
        })

        res.status(201).json(createProduct)
    }
}