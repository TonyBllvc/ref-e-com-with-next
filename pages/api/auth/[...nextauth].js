import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from '../../../lib/mongodb'
// import EmailProvider from 'next-auth/providers/email'

export default NextAuth({
    providers: [
        // GithubProvider({
        //     clientId: process.env.GITHUB_ID,
        //     clientSecret: process.env.GITHUB_SECRET,
        // }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),
        // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
    ],

    adapter: MongoDBAdapter(clientPromise),
})