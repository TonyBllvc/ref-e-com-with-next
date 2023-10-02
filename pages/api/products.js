// import mongoose from "mongoose"
// import clientPromise from "../../lib/mongodb"
import { mongooseConnect } from "../../lib/mongoose"
import { Product } from "../../models/Product"
import authorization from "./user/authorization"

export default async function handle(req, res) {
    await mongooseConnect()

    // await authorization()
    
    const { title, description, price } = req.body
    const { method } = req

    // mongoose.connect(clientPromise.url) 
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