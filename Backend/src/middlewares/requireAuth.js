import jwt from 'jsonwebtoken';

const requireAuth = (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if(!token) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = {
            userId: decoded.userId,
            role: decoded.role,
        };

        next();
    } catch(err) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        })
    }
};

export default requireAuth;