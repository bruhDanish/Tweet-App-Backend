import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controllers/tweets.controller.js'; // Import the tweets controller
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.validator.js';

const router = express.Router(); // Create a new router

router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', validate(tweetZodSchema), createTweet);

export default router; // Export the router