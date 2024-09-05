import express from "express";
import mongoose from "mongoose";
import { createServer } from "node:http";
import { Server } from "socket.io";
import cors from "cors";
import { connectToServer } from "./Controllers/socketManager.js";
import userRoutes from "./Routes/users.routes.js"

const app = express();
const server = createServer(app);
const  io = connectToServer(server);

app.set("port", (process.env.PORT || 8080));
app.use(cors());
app.use(express.json({limit : "40kb"}));
app.use(express.urlencoded({ limit : "40kb", extended: true}));
 app.use("/api/v1/users", userRoutes);
 
const start = async()=>{
           
    const connectionDb = await mongoose.connect("mongodb+srv://KumkumDaksh:6NkCw4KMSFJUGgTN@zoomclone.b3xwx.mongodb.net/?retryWrites=true&w=majority&appName=ZoomClone");
    server.listen(app.get("port"), ()=>{
        console.log("app is lestening");
    });
};

start();