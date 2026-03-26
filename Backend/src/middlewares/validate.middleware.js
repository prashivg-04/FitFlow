import { ZodError } from 'zod';
import AppError from '../utils/AppError.js';

export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch(err) {
        if(err instanceof ZodError) {
            const message = err.issues.map(e => e.message).join(', ');
            throw new AppError(message, 400);
        }
        return next(err);
    }
}