const requireMember = (req, res, next) => {
    if(req.user?.role !== 'MEMBER') {
        return res.status(403).json({
            success: false,
            message: "Member access required",
        });
    }
    next();
}

export default requireMember;