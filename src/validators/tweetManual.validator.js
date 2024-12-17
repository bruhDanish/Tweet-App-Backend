import mongoose from "mongoose";

export const createTweetManualValidator = (req, res, next) => {
    if(!req.body.tweet){
        return res.status(400).json({
            error: 'Tweet is required'
        });
    }

    if(req.body.tweet.length > 200){
        return res.status(400).json({
            error: 'Tweet is too long'
        });
    }

    next();
}; 

export const getTweetByIdManualValidator = (req, res, next) => {
    const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
    if(!isValidId){
        return res.status(400).json({
            success: false,
            message: 'Invalid tweet id'
        });
    }
    
    next();
}