import { response } from "express";
import { createTweet as createTweetService } from "../services/tweet.service.js";

export const getTweets = (req, res) => {
    return res.json({
        message: 'Tweets'
    });
}

export const getTweetById = (req, res) => {
    return res.json({
        message: 'Tweet',
        id: req.params.id
    });
}

export const createTweet = async(req, res) => {
    try{
        const tweet = await createTweetService({
            body: req.body.body,
            image: req.file?.location
        });
        return res.status(201).json({
            success: true,
            data: response,
            message: 'Tweet created'
        });

    }catch(err){
        console.log(err);
        if(err.status){
            return res.status(err.status).json({
                message:err.message,
                success: false
            })
        }
        return res.status(500).json({
            message: err.message,
            success: false
        });
    }
}