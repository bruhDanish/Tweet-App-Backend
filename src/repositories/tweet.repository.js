import Tweet from "../schema/tweet.schema.js"

export const createTweet = async ({body}) => {
    try{
        const tweet = await Tweet.create({body});
        return tweet;
    }catch(err){
        throw err;
    }
}

export const getTweets = async () => {
    try{
        const tweets = await Tweet.find();
        return tweets;
    }catch(err){
        throw err;
    }
}

export const getTweetById = async (tweetId) => {
    try{
        const tweet = await Tweet.findById(tweetId);
        return tweet;
    }catch(err){
        throw err;
    }
}