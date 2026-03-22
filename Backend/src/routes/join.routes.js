import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import { createJoinRequest } from '../controllers/join.controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = express.Router();

router.post('/', requireAuth, asyncHandler(createJoinRequest));

export default router;