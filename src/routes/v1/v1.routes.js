import express from 'express';
import tweetsRouter from './tweets.routes.js'; // Import the tweets router
import commentsRouter from './comments.routes.js'; // Import the comments router

const router = express.Router(); // Create a new router

router.use('/tweets', tweetsRouter);
router.use('/comments', commentsRouter);

export default router; // Export the router