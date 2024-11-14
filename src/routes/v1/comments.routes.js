import express from 'express';
import { getCommentById, getComments } from '../../controllers/comments.controller.js';

const router = express.Router(); // Create a new router

router.get('/', getComments);

router.get('/:id', getCommentById);

export default router; // Export the router