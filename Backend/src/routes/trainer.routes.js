import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import requireTrainer from '../middlewares/requireTrainer.js';
import { getMyMembers } from '../controllers/trainer.controller.js';

const router = express.Router();

router.get('/members', requireAuth, requireTrainer, getMyMembers);

export default router;