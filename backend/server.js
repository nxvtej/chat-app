import express from "express";
import dotenv from "dotenv";

import authRoutes from"./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;



app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server is runnign at ${PORT}`);
});