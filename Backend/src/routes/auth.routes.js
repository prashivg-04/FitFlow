import express from 'express';
const router = express.Router();
import { body, validationResult } from 'express-validator';
import { signup, login, logout, me } from '../controllers/auth.controller.js';
import requireAuth from '../middlewares/requireAuth.js';
import { validate } from '../middlewares/validate.middleware.js';
import { loginSchema, signupSchema } from '../validations/auth.validation.js';
import asyncHandler from '../middlewares/asyncHandler.js';

router.post('/signup', validate(signupSchema), asyncHandler(signup));
router.post('/login', validate(loginSchema), asyncHandler(login));
router.post('/logout', requireAuth, asyncHandler(logout));

router.get('/me', requireAuth, asyncHandler(me));

export default router;