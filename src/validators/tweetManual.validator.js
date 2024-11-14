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