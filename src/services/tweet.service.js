import { Filter } from "bad-words"
import { 
    createTweet as  createTweetRespository, 
    getTweets as getTweetsRespository, 
    getTweetById as getTweetByIdRespository,
    deleteTweet as deleteTweetRespository,
    updateTweet as updateTweetRepository
} from "../repositories/tweet.repository.js";

export const createTweet = async ({ body, image }) => {
    //try to find blocked words in the tweet body and if found, throw an error
    const filter = new Filter();

    if (filter.isProfane(body)) {
        console.log(body);
        console.log(filter.clean(body));
        throw {
            message: 'tweet contains blocked words',
            staus: 400
        };
    }

    const tweet = await createTweetRespository({ body, image });

    return tweet;

}

export const getTweets = async () => {
    const tweets = await getTweetsRespository();
    return tweets;
}

export const getTweetById = async (id) => {
    const tweet = await getTweetByIdRespository(id);

    if (!tweet) {
        throw {
            message: 'Tweet not found',
            status: 404
        };
    }

    return tweet;
}

export const deleteTweet = async (id) => {
    const response = await deleteTweetRespository(id);
    if(!response){
        throw {
            message: 'Tweet not found',
            status: 404
        }
    }
    return response;
}

export const updateTweet = async (id, body) => {
    const response = await updateTweetRepository(id, body);
    if(!response){
        throw {
            message: 'Tweet not found',
            status: 404
        }
    }
    return response;
}