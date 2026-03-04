import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireMember from '../middlewares/requireMember.js';
import { completeWorkout, getMemberSchedule } from '../controllers/memberWorkout.controller.js';

const router = express.Router();

router.get('/schedule', requireAuth, requireMember, getMemberSchedule);
router.post('/complete-workout', requireAuth, requireMember, completeWorkout);

export default router;