import User from "../models/user.model.js";
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    try{
    const { fullName, username, password, confirmpassword, gender} = req.body;
    
    if(password != confirmpassword){
        return res.status(400).json({
            error:"passwords doesn't match"
        })
    }

    const user  = await User.findOne({username});
    if(user){
        return res.status(400).json({
           error:"user already exists" 
        })
    }

    // hash passdword here
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

    const newUser = new User ({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilePic: gender === 'male' ? boyProfilePic : girlProfilePic
    })

    await newUser.save();
    res.status(201).json({
        _id: newUser.id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic
    })
}
    catch (error) {
        console.log("Error in sign up controller", error.message)
        res.status(500).json({error: "internal server error"});
    }
}


export const login = (req, res) => {
    console.log("loginuser");
}

export const logout = (req, res) => {
    res.send("bye bye")
    console.log("logoutuser");
}