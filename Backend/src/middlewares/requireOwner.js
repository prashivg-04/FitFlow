import AppError from '../utils/AppError.js';

const requireOwner = (req, res, next) => {
    if (!req.user) {
        throw new AppError("Authentication required", 401);
    }

    if(req.user?.role !== 'OWNER') {
        throw new AppError("Access denied: Owners only", 403);
    }
    return next();
}

export default requireOwner;