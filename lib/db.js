import mongoose from "mongoose";

// if (!process.env.MONGODB_URI) {
//     throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
// }

const uri = process.env.MONGODB_URI
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


async function connectDB() {
    try {
        let connection;
        connection = await mongoose.connect("mongodb://127.0.0.1:27017/", options)
        console.log('Mongo Connected')
        return connection
    } catch (error) {
        console.log('Failed to connect:', error)
        process.exit(1)
    }
}

export default connectDB