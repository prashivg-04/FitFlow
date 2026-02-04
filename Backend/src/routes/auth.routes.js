import express from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import { signup, login } from '../controllers/auth.controller.js';

router.post('/signup', signup);
router.post('/login', login);

export default router;