import jwt from "jsonwebtoken";
const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: "15d",
    })
    res.cookie("jwt", token, {
        maxAge: 15*24*60*60*1000,
        httpOnly: true, //this is only acccessibble only on http prevent 
                        // access as attacks cross side scrypting attacks
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development"
    });
};

export  default generateTokenAndSetCookie ;