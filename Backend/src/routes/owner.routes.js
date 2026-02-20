import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireOwner from '../middlewares/requireOwner.js';
import { getJoinRequests, updateJoinRequestStatus } from '../controllers/owner.controller.js';
import { assignTrainer, getTrainers, getUnassignedMembers, unassignTrainer } from '../controllers/assignment.controller.js';

const router = express.Router();

router.get('/join-requests', requireAuth, requireOwner, getJoinRequests);
router.patch('/join-request/:id', requireAuth, requireOwner, updateJoinRequestStatus);

router.get('/members/unassigned', requireAuth, requireOwner, getUnassignedMembers);
router.get('/trainers', requireAuth, requireOwner, getTrainers);
router.post('/assign-trainer', requireAuth, requireOwner, assignTrainer);
router.delete('/unassign-trainer', requireAuth, requireOwner, unassignTrainer);

export default router;