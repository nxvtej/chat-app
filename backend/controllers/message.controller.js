import { application } from "express";
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


export const sendMessage = async (req, res) => {
    // console.log("message send", req.params.id);

    try {
        const { message } = req.body;
        const { id:receiverId } = req.params;
        const senderId = req.user._id;


        let conversation = await Conversation.findOne({
            participants: {
                $all: [senderId, receiverId]
            },
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                // no need to create empty message as its in scchema
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();
        
        res.status(201).json(newMessage);
    } catch(error){
        console.log("error in sendMessage controller: ", error.message);
        res.status(500).json({
            error: "Interval server error"
        });
    }
};