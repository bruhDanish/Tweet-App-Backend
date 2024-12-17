import express from 'express';
import { getTweetById, getTweets, createTweet, deleteTweet, updateTweet } from '../../controllers/tweets.controller.js'; // Import the tweets controller
import { validate } from '../../validators/zodValidator.js';
import { tweetZodSchema } from '../../validators/tweetZodSchema.validator.js';
import { s3Uploader } from '../../config/multer.config.js';
import { getTweetByIdManualValidator } from '../../validators/tweetManual.validator.js';

const router = express.Router(); // Create a new router

router.get('/', getTweets);

router.get('/:id', getTweetByIdManualValidator, getTweetById);

router.post('/', s3Uploader.single('tweetImage'), validate(tweetZodSchema), createTweet);

router.delete('/:id', getTweetByIdManualValidator, deleteTweet);

router.put('/:id', getTweetByIdManualValidator, validate(tweetZodSchema), updateTweet);

export default router; // Export the router