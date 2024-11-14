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

export const createTweet = (req, res) => {
    return res.json({
        message: 'Tweet created',
        body: req.body
    });
}