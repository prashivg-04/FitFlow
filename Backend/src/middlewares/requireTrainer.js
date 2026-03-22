import AppError from '../utils/AppError.js';

const requireTrainer = (req, res, next) => {
    if (!req.user) {
        throw new AppError("Authentication required", 401);
    }

    if(req.user?.role !== 'TRAINER') {
        throw new AppError("Access denied: Trainers only", 403);
    }
    return next();
}

export default requireTrainer;