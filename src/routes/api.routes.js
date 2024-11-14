import express from 'express';
import v1Router from './v1/v1.routes.js'; // Import the v1 router
import v2Router from './v2/v2.routes.js'; // Import the v2 router

const router = express.Router(); // Create a new router

router.use('/v1', v1Router);
router.use('/v2', v2Router);

export default router; // Export the router