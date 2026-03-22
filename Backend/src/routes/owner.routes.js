import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireOwner from '../middlewares/requireOwner.js';
import { getJoinRequests, updateJoinRequestStatus } from '../controllers/owner.controller.js';
import { assignTrainer, getTrainers, getUnassignedMembers, unassignTrainer } from '../controllers/assignment.controller.js';
import asyncHandler from '../middlewares/asyncHandler.js';

const router = express.Router();

router.get('/join-requests', requireAuth, requireOwner, asyncHandler(getJoinRequests));
router.patch('/join-request/:id', requireAuth, requireOwner, asyncHandler(updateJoinRequestStatus));

router.get('/members/unassigned', requireAuth, requireOwner, asyncHandler(getUnassignedMembers));
router.get('/trainers', requireAuth, requireOwner, asyncHandler(getTrainers));
router.post('/assign-trainer', requireAuth, requireOwner, asyncHandler(assignTrainer));
router.delete('/unassign-trainer', requireAuth, requireOwner, asyncHandler(unassignTrainer));

export default router;