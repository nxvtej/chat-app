import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from"./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import protectRoute from "./middleware/protectRoute.js";


import { app, server } from './socket/socket.js';

// const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",protectRoute, messageRoutes); //important kind of auth
app.use("/api/users", userRoutes);

server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is runnign at ${PORT}`);
});