import NextUserModel from "../../../models/User";

/* eslint-disable import/no-anonymous-default-export */
export async function authorize(req, res, next ) {
    // let jwt
    // jwt = res.getHeader('Get-Cookie', )
    // const { cookies } = req;

    const jwt = req.cookies['jwt'];
    // jwt = getCookie(req, 'jwt')
    // jwt = req.cookies.jwt;
    // const cookies = new

    if (!jwt) {
        return res.status(401).json({ message: "Unauthorized Request" });   
    }
    // try {
        
    // if (jwt) {
    //     res.status(201).json({ message: "Authorized" });
    //     next()
    // }
    // } catch (error) {
    //     // if {
    //         return res.status(401).json({ message: error.message });
    //         // next()
    //     // }   
    // }
    // next()
    // next()
    if (jwt) {
        try {
            const decoded = jwt.verify(jwt, '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')

            req.user = await NextUserModel.findById(decoded._id).select('-password')

            next()
        } catch (error) {
            res.status(401).json({ error: 'Invalid request'})
            return
        }
    }else{
        res.status(401).json({error: 'Not authorized'})
        return
    }
}
