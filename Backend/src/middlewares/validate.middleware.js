import { ZodError } from 'zod';

export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    } catch(err) {
        if(err.name === 'ZodError') {
            const formattedErrors = {};

            err.issues.forEach((e) => {
                const field = e.path.join('.');
                formattedErrors[field] = e.message;
            });

            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: formattedErrors
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}