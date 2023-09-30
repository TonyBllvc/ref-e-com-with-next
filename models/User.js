import mongoose, { model, Schema, models } from "mongoose";
import bcrypt from 'bcrypt'

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // images: [
    //   {
    //     type: String
    //   }
    // ],
    // category: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Category'
    // },
    // properties: {
    //   type: Object
    // },
}, {
    timestamps: true,
});

// userSchema.pre("save", async function (next) {
//     const user = this

//     if (this.isModified("password")) {
//         return next()
//     }

//     try {
//         const salt = await bcrypt.genSalt(10)

//         this.password = await bcrypt.hash(this.password, salt)
//         next()
//     } catch (error) {
//         throw new Error('There is an error')
//     }
// })


// userSchema.methods.comparePassword = async function (password) {
//     try {
//         return await bcrypt.compare(password, this.password)
//     } catch (error) {
//         throw new Error('There is another error')
//     }
// }

// if (this.isModified("password" || this.isNew)) {
//     bcrypt.genSalt(10, function (saltError, salt) {
//         if (saltError) {
//             return next(saltError)
//         } else {
//             bcrypt.hash(user.password, salt, function (hashError, hash) {
//                 if (hashError) {
//                     return next(hashError)
//                 }

//                 user.password = hash
//                 next()
//             })
//         }
//     })
// }else{
//     return next()
// }
// })

// userSchema.methods.comparePassword = function (password, callback) {
//     bcrypt.compare(password, this.password, function (error, isMatch) {
//         if (error) {
//             return callback(error)
//         } else {
//             callback(null, isMatch)
//         }
//     })
// }

// static signup method
// ( while using the 'this' keyword, we can't use  the arrow function)
userSchema.statics.signup = async function (name, email, password) {

    // validation
    // check if the mail and password both have values
    if (!name || !email || !password) {
        throw Error('All fields must be filled')
    }

    // to check for replicated emails
    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Emails already in use')
    }

    // for two different users use the same password
    // the salt creates a different hash
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ name, email, password: hash })

    return user
}

// static login method
// UserSchema.statics.login = async function (name, email, password) {
//     // validation
//     // check if the mail and password both have values
//     if (!name || !email || !password) {
//         throw Error('All fields must be filled')
//     }


//     // to find the user with email
//     const user = await this.findOne({ email })

//     // check if user exists or not
//     // if not, throw error
//     if (!user) {
//         throw Error('Incorrect email and password')
//     }

//     // match passwords with the hashed version, to compare
//     // two arguments:(
//     // 1. normal password value 
//     // 2. encrypted password version(hashed) 
//     // )
//     const match = await bcrypt.compare(password, user.password)

//     if (!match) {
//         throw Error(' Incorrect emain and password')
//     }

//     return user
// }

const NextUserModel = models.NextUser || model('NextUser', userSchema);

export default NextUserModel