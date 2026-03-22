import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireTrainer from '../middlewares/requireTrainer.js';
import { getMyMembers } from '../controllers/trainer.controller.js';
import { createWorkoutProgram, getWorkoutPrograms } from '../controllers/workoutProgram.controller.js';
import { assignProgramToMember } from '../controllers/workoutAssignment.controller.js';
import { getTrainerMemberCalendar } from '../controllers/trainerCalendar.controller.js';
import { getTrainerAssignmentWindow } from '../controllers/trainerAssignmentWindow.controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/members', requireAuth, requireTrainer, asyncHandler(getMyMembers));

router.post('/programs', requireAuth, requireTrainer, asyncHandler(createWorkoutProgram));
router.get('/programs', requireAuth, requireTrainer, asyncHandler(getWorkoutPrograms));

router.post('/assign-program', requireAuth, requireTrainer, asyncHandler(assignProgramToMember));

router.get('/member/:memberId/calendar', requireAuth, requireTrainer, asyncHandler(getTrainerMemberCalendar));
router.get('/member/:memberId/assignment-window', requireAuth, requireTrainer, asyncHandler(getTrainerAssignmentWindow));

export default router;