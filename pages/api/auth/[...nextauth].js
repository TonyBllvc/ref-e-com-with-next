// import { MongoDBAdapter } from '@auth/mongodb-adapter'
// import NextAuth from 'next-auth'
import NextAuth from 'next-auth/next';
import Provider from 'next-auth/providers';
import { useLogin } from '../../../hooks/useLogin';
// import CredentialsProvider from 'next-auth/providers/credentials';
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from 'next-auth/providers/google'
// import clientPromise from '../../../lib/mongodb'
// import EmailProvider from 'next-auth/providers/email'


export const authOptions = {
    providers: [
        Provider.Credentials({
            name: "authorize_use",
            credentials: {},
            async authorize(credentials, req) {
                const { email, password } = credentials;

                await login(email, password)

                const { login } = useLogin('/api/auth/log')
                
                // const res = await fetch('api/auth/log', {
                //     method: 'POST',
                //     body: JSON.stringify({ email, password}),
                //     headers: { "Content-Type": "application/json"}
                // }) 
            }
            // async authorize(credentials) {
            //   const { email, password } = credentials;

            //   try {
            //     await connectMongoDB();
            //     const user = await User.findOne({ email });

            //     if (!user) {
            //       return null;
            //     }

            //     const passwordsMatch = await bcrypt.compare(password, user.password);

            //     if (!passwordsMatch) {
            //       return null;
            //     }

            //     return user;
            //   } catch (error) {
            //     console.log("Error: ", error);
            //   }
            // },
        }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: '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',
    pages: {
        signIn: "/",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };


















// export default NextAuth({
//     providers: [
//         // GithubProvider({
//         //     clientId: process.env.GITHUB_ID,
//         //     clientSecret: process.env.GITHUB_SECRET,
//         // }),
//         GoogleProvider({
//             clientId: process.env.GOOGLE_ID,
//             clientSecret: process.env.GOOGLE_SECRET
//         }),
//         // Passwordless / email sign in
//         // EmailProvider({
//         //     server: process.env.MAIL_SERVER,
//         //     from: 'NextAuth.js <no-reply@example.com>'
//         // }),
//     ],

//     adapter: MongoDBAdapter(clientPromise),
// })