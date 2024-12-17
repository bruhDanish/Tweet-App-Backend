import Tweet from "../schema/tweet.schema.js"

export const createTweet = async ({body, image}) => {
    try{
        const tweet = await Tweet.create({body, image});
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

export const deleteTweet = async (tweetId) => {
    try {
        const tweet = await Tweet.findByIdAndDelete(tweetId);
        return tweet;
    } catch (error) {
        throw error;
    }
}

export const updateTweet = async (tweetId, body) => {
    try {
        const tweet = await Tweet.findByIdAndUpdate(tweetId, { body }, { new: true });
        return tweet;
    } catch (error) {
        throw error;
    }
}