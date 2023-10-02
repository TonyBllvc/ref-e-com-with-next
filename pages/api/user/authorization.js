// // import NextUserModel from "../../../models/User";
// // import  Cookie  from 'cookie'
// // import { getCookie } from 'next/coo'

// /* eslint-disable import/no-anonymous-default-export */
// export default async function (req, res, next) {
//     let jwt
//     // jwt = res.getHeader('Get-Cookie', )
//     // const { cookies } = req;
//     // jwt = getCookie(req, 'jwt')
//     // jwt = req.heders.cookies.jwt;
//     // const cookies = new


//     if (!jwt) {
//         return res.status(401).json({ message: "Unauthorized Request" });
//     }
//     if (jwt) {
//         return res.status(201).json({ message: "Authorized" });
//     }

//     // if (jwt) {
//     //     try {
//     //         const decoded = jwt.verify(jwt, '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')

//     //         req.user = await NextUserModel.findById(decoded._id).select('-password')

//     //         next()
//     //     } catch (error) {
//     //         res.status(401).json({ error: 'Invalid request'})
//     //         return
//     //     }
//     // }else{
//     //     res.status(401).json({error: 'Not authorized'})
//     //     return
//     // }
// }
