import User from '../models/user.model.js'
export const getUsersForSideBar = async(req, res) =>{
    try {
      const loggedInUserId = req.user._id;  

    //   all users from the database
    const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
    res.status(200).json(filteredUsers);
    } catch (error){
        console.log("error in getusersforsidebar: ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}