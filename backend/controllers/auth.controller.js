
export const signup = async (req, res) => {
    try{
const { fullName, username, password, confirmpassword, gender} = req.body;
    }
    catch (error) {

    }
}


export const login = (req, res) => {
    console.log("loginuser");
}

export const logout = (req, res) => {
    res.send("bye bye")
    console.log("logoutuser");
}