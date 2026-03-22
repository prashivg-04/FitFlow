import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireMember from '../middlewares/requireMember.js';
import { completeWorkout, getMemberSchedule } from '../controllers/memberWorkout.controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/schedule', requireAuth, requireMember, asyncHandler(getMemberSchedule));
router.post('/complete-workout', requireAuth, requireMember, asyncHandler(completeWorkout));

export default router;