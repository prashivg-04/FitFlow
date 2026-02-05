import express from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import { signup, login, logout } from '../controllers/auth.controller.js';
import requireAuth from '../middlewares/requireAuth.js';

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', requireAuth, logout);

export default router;