import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireOwner from '../middlewares/requireOwner.js';
import { getJoinRequests, updateJoinRequestStatus } from '../controllers/owner.controller.js';

const router = express.Router();

router.get('/join-requests', requireAuth, requireOwner, getJoinRequests);
router.patch('/join-request/:id', requireAuth, requireOwner, updateJoinRequestStatus);

export default router;