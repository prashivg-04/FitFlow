import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireTrainer from '../middlewares/requireTrainer.js';
import { getMyMembers } from '../controllers/trainer.controller.js';
import { createWorkoutProgram, getWorkoutPrograms } from '../controllers/workoutProgram.controller.js';
import { assignProgramToMember } from '../controllers/workoutAssignment.controller.js';
import { getTrainerMemberCalendar } from '../controllers/trainerCalendar.controller.js';
import { getTrainerAssignmentWindow } from '../controllers/trainerAssignmentWindow.controller.js';

const router = express.Router();

router.get('/members', requireAuth, requireTrainer, getMyMembers);

router.post('/programs', requireAuth, requireTrainer, createWorkoutProgram);
router.get('/programs', requireAuth, requireTrainer, getWorkoutPrograms);

router.post('/assign-program', requireAuth, requireTrainer, assignProgramToMember);

router.get('/member/:memberId/calendar', requireAuth, requireTrainer, getTrainerMemberCalendar);
router.get('/member/:memberId/assignment-window', requireAuth, requireTrainer, getTrainerAssignmentWindow);

export default router;