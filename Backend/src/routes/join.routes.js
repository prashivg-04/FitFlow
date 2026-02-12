import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';
import { createJoinRequest } from '../controllers/join.controller.js';

const router = express.Router();

router.post('/', requireAuth, createJoinRequest);

export default router;