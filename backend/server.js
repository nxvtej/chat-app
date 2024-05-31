import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path';

import authRoutes from"./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import protectRoute from "./middleware/protectRoute.js";


import { app, server } from './socket/socket.js';


const __dirname = path.resolve(); //coming frmo node js
// const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages",protectRoute, messageRoutes); //important kind of auth
app.use("/api/users", userRoutes);

// middleware here
// connected frontend to backend and both runnign at port 5000
app.use(express.static(path.join(__dirname, '/frontend/dist'))); //for serving static files

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/dist/index.html'));
})


server.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is runnign at ${PORT}`);
});