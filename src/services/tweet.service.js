import { Filter } from "bad-words"
import { createTweet as  createTweetRespository} from "../repositories/tweet.repository.js";

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