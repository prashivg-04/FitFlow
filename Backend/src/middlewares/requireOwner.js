const requireOwner = (req, res, next) => {
    if(req.user?.role !== 'OWNER') {
        return res.status(403).json({
            success: false,
            message: "Owner access required",
        });
    }
    next();
}

export default requireOwner;