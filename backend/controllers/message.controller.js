import Conversation from "../models/conversation.model.js";

export const sendMessage = async (req, res) => {
    // console.log("message send", req.params.id);

    try {
        const {message} = req.body;
        const {id:receiverId} = req.params;
        const senderId = req.user._id;;


        const conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        })
    } catch(error){
        console.log("error in sendMessage controller: ", error.message);
        res.status(500).json({
            error: "Interval server error"
        });
    }
};