import { serialize } from "cookie";

export default async function handle(req, res) {
    const { cookies } = req;
  
    const jwt = cookies.jwt;
  
    if (!jwt) {
      return res.status(400).json({ error: "Already logged out " });
    } else {
      const serialised = serialize("jwt", null, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: -1,
        path: "/",
      });
  
      res.setHeader("Set-Cookie", serialised);
  
      res.status(200).json({ message: "Successfuly logged out!" });

    //   return serialised
    }

}