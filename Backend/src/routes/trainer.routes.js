import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireTrainer from '../middlewares/requireTrainer.js';
import { getMyMembers } from '../controllers/trainer.controller.js';
import { createWorkoutProgram, getWorkoutPrograms } from '../controllers/workoutProgram.controller.js';

const router = express.Router();

router.get('/members', requireAuth, requireTrainer, getMyMembers);

router.post('/programs', requireAuth, requireTrainer, createWorkoutProgram);
router.get('/programs', requireAuth, requireTrainer, getWorkoutPrograms);

export default router;