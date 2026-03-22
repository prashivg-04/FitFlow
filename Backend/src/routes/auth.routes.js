import express from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import { signup, login, logout, me } from '../controllers/auth.controller.js';
import requireAuth from '../middlewares/requireAuth.js';
import { validate } from '../middlewares/validate.middleware.js';
import { signupSchema } from '../validations/auth.validation.js';

router.post('/signup', validate(signupSchema), signup);
router.post('/login', login);
router.post('/logout', requireAuth, logout);

router.get('/me', requireAuth, me);

export default router;