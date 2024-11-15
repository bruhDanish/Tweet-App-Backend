import mongoose from "mongoose";
import { MONGO_URL } from "./server.config.js";

export default async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL)
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('Failed to connect to MongoDB', err);
    }
}