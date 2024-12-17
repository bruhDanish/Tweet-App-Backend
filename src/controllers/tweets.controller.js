import { response } from "express";
import { 
    createTweet as createTweetService, 
    getTweets as getTweetsService, 
    getTweetById as getTweetByIdService,
    deleteTweet as deleteTweetService,
    updateTweet as updateTweetService
} from "../services/tweet.service.js";
import { errorResponse } from "../utils/responses.js";

export const createTweet = async(req, res) => {
    try{
        const tweet = await createTweetService({
            body: req.body.body,
            image: req.file?.location
        });
        return successResponse(tweet, 201, 'Tweet created');

    }catch(error){
        return errorResponse(error);
    }
}

export const getTweets = async (req, res) => {
    try {
        const response = await getTweetsService();

        return successResponse(response, 200, 'Tweets fetched');
    } catch (error) {
        return errorResponse(error);
        
    }
}

export const getTweetById = async (req, res) => {
    try {
        const response = await getTweetByIdService(req.params.id);

        return successResponse(response, 200, 'Tweet fetched by ID');
    } catch (error) {
        return errorResponse(error);      
    }
}

export const deleteTweet = async (req, res) => {
    try {
        const response = await deleteTweetService(req.params.id);
        return successResponse(response, 200, 'Tweet deleted');
    } catch (error) {
        return errorResponse(error);
    }
}

export const updateTweet = async (req, res) => {
    try {
        const response = await updateTweetService(req.params.id, req.body.body);
        return successResponse(response, 200, 'Tweet updated');
    } catch (error) {
        return errorResponse(error);
    }
}