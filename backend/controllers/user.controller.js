export const getUsersForSideBar = async(req, res) =>{
    try {
      const loggedInUserId = req.user._id;  

    //   all users from the database
    const allUsers = await User.find({_id: {$ne: loggedInUserId}});
    } catch (error){
        console.log("error in getusersforsidebar: ", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }
}