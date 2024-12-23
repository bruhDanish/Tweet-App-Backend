import mongoose, { mongo } from "mongoose";

const tweetSchema = new mongoose.Schema({
    body: {
        type: String,
        required: true,
        trim: true, // removes whitespace from both ends of a string
        maxlength: 280
    },
    image:{
        type: String,
        default: null 
    }
}, {timestamps: true});

const Tweet = mongoose.model('Tweet', tweetSchema); //tweet collection

export default Tweet;