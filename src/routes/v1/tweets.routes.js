import express from 'express';
import { getTweetById, getTweets, createTweet } from '../../controllers/tweets.controller.js'; // Import the tweets controller

const router = express.Router(); // Create a new router

router.get('/', getTweets);

router.get('/:id', getTweetById);

router.post('/', createTweet);

export default router; // Export the router