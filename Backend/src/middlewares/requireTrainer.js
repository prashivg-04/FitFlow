const requireTrainer = (req, res, next) => {
    if(req.user?.role !== 'TRAINER') {
        return res.status(403).json({
            success: false,
            message: "Trainer access required",
        });
    }
    next();
}

export default requireTrainer;