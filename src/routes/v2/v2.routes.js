import express from 'express';
import tweetsRouter from './tweets.routes.js'; // Import the tweets router

const router = express.Router(); // Create a new router

router.use('/tweets', tweetsRouter);

export default router; // Export the router