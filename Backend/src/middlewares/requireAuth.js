import jwt from 'jsonwebtoken';
import AppError from '../utils/AppError.js'

const requireAuth = (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if(!token) {
            throw new AppError("Authentication required", 401);
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            userId: decoded.userId,
            role: decoded.role,
        };

        return next();
    } catch(err) {
        throw new AppError("Invalid or expired token", 401);
    }
};

export default requireAuth;