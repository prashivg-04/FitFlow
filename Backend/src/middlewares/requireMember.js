import AppError from '../utils/AppError.js';

const requireMember = (req, res, next) => {
    if (!req.user) {
        throw new AppError("Authentication required", 401);
    }

    if(req.user?.role !== 'MEMBER') {
        throw new AppError("Access denied: Members only", 403);
    }
    return next();
}

export default requireMember;