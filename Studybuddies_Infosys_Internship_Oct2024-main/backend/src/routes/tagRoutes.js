import express from 'express';
import { createTag, removeTagFromDeck, getTags,searchTag } from '../controllers/tagController.js';
import { userAuthMiddleware } from '../middlewares/auth.js';

const router = express.Router();

/**
 * @route GET /api/tags
 * @desc Get all tags
 * @access Public
 */
router.get('/', getTags);

/**
 * @route POST /api/tags
 * @desc Create a new tag
 * @access Private (User Auth)
 */
router.post('/', userAuthMiddleware, createTag);



/**
 * @route DELETE /api/tags/:deckId
 * @desc Remove a tag from a specific deck
 * @access Private (User Auth)
 */
router.delete('/:deckId', userAuthMiddleware, removeTagFromDeck);


/**
 * @route GET /api/tags/suggest
 * @desc suggestion to search tags
 * @access Private (User Auth)
 */

router.get('/suggest',userAuthMiddleware,searchTag)
export default router;
