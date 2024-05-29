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

        // socket.io will come here for real time

        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(), newMessage.save()]); //both run at same time
        res.status(201).json(newMessage);
    } catch(error){
        console.log("error in sendMessage controller: ", error.message);
        res.status(500).json({
            error: "Interval server error"
        });
    }
};

export const getMessages = async (req, res) => {
    try {

        const {id: userToChatId} = req.params;
        const senderId = req.user._id; //coming from protect route
        
        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId]},
        }).populate("messages");  //this gives each messages on by one

        if(!conversation) return res.status(200).json([]);

        res.status(200).json(conversation.messages);
    } catch (error){
        console.log("error in getMessages", error.message);
        res.status(500).json({error: "interanl server error"});
    }
}