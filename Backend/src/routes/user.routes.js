import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import asyncHandler from '../middlewares/asyncHandler.js';
import { getGymInfo } from '../controllers/user.controller.js';

const router = express.Router();

router.get('/gym-info', requireAuth, asyncHandler(getGymInfo));

export default router;