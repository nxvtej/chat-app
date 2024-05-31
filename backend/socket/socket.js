import { Server } from 'socket.io'
import http from 'http';
import express from 'express';
import { Socket } from 'dgram';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});


// for front end setOnlineusers, via socketid
const userSocketMap = {}; //{userId: socketId}

io.on('connection', (socket)=> {
    console.log('New client connected',socket.id);


        const userId = socket.handshake.query.userId; //using that argument just passed in fronend
        if(userId != "undefined"){
            userSocketMap[userId] = socket.id;
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap)); //now this event will be sent to all connected clients


    // on listening to events, on both sides client and server
    socket.on("disconnect", ()=> {
        console.log("user disconnected", socket.id)
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
        // same for deleting when user goes offline;
    })
})
export { app, io, server }